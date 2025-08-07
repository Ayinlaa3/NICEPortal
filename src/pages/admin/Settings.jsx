

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="transition-shadow cursor-pointer hover:shadow-xl">
        <CardContent className="p-6">
          <h2 className="mb-2 text-lg font-semibold">Account Preferences</h2>
          <p className="text-sm text-gray-500">Change email, password, or personal details.</p>
        </CardContent>
      </Card>

      <Card className="transition-shadow cursor-pointer hover:shadow-xl">
        <CardContent className="p-6">
          <h2 className="mb-2 text-lg font-semibold">System Settings</h2>
          <p className="text-sm text-gray-500">Manage system-wide preferences and configurations.</p>
        </CardContent>
      </Card>

      <Card className="transition-shadow cursor-pointer hover:shadow-xl">
        <CardContent className="p-6">
          <h2 className="mb-2 text-lg font-semibold">Permissions & Roles</h2>
          <p className="text-sm text-gray-500">Configure roles and access levels.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
