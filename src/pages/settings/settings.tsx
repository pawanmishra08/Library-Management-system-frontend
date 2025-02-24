import { SettingsIcon } from "lucide-react";

export default function Settings() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <SettingsIcon /> Settings
            </h1>
            <div className="mt-4">
                <p className="text-gray-600">Manage your account settings and preferences here!!!</p>
                <h2>Accessibility</h2>
                <p className="text-gray-600"> Here is the Accessibility!!!</p>
            </div>
        </div>
    );
}
