import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import RoleSelection from "@/components/registration/RoleSelection";
import { useState, useEffect } from "react";

const Registration = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const roleFromParams = searchParams.get("role");
    if (roleFromParams) {
      setRole(roleFromParams);
    }
  }, [searchParams]);

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole);
    setSearchParams({ role: selectedRole });
  };

  if (!role) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <RoleSelection onSelectRole={handleRoleSelect} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account as a {role}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to={`/login?role=${role}`} className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
