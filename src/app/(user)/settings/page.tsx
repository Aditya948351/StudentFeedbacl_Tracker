"use client";

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Profile Section */}
      <div className="mb-10 p-6 border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <p><strong>Name:</strong> Aditya Patil</p>
        <p><strong>Email:</strong> adityauseless@gmail.com</p>
      </div>

      {/* Password Section */}
      <div className="mb-10 p-6 border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Security</h2>
        <button
          disabled
          className="bg-muted text-muted-foreground px-4 py-2 rounded cursor-not-allowed"
        >
         Dont Touch
        </button>
      </div>

      {/* Danger Zone */}
      <div className="p-6 border rounded-lg border-destructive bg-destructive/10">
        <h2 className="text-xl font-semibold text-destructive mb-4">Danger Zone</h2>
        <button
          onClick={() => alert("Account deletion coming soon.")}
          className="bg-destructive text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
