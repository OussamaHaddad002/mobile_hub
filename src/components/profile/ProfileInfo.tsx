import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface ProfileInfoProps {
  userInfo: {
    name: string;
    email: string;
    avatar: string;
  };
  setUserInfo: (info: { name: string; email: string; avatar: string }) => void;
}

export default function ProfileInfo({ userInfo, setUserInfo }: ProfileInfoProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState(userInfo);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo(formData);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={userInfo.avatar} />
            <AvatarFallback>
              {userInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold">{userInfo.name}</h2>
          <p className="text-muted-foreground">{userInfo.email}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="avatar">Avatar URL</Label>
                  <Input
                    id="avatar"
                    value={formData.avatar}
                    onChange={(e) =>
                      setFormData({ ...formData, avatar: e.target.value })
                    }
                  />
                </div>
                <Button type="submit">Save Changes</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}