"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Profile from "./profile";
import ProfileIcon from "@/components/ProfileIcon/ProfileIcon/ProfileIcon";

export default function ProfilePage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_PROFILE_URL || "";
    axios
      .get(url + id)
      .then((response) => {
        const profiles = response.data.map((profile: any) => {
          return {
            id: profile.id,
            firstName: profile.first_name,
            lastName: profile.last_name,
          };
        });
        setProfiles(profiles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <h1 className="text-white text-3xl pb-3">Who's watching?</h1>
      </div>
      <div className="flex justify-center">
        {profiles.map((profile: Profile) => {
          return (
            <ProfileIcon
              id={profile.id}
              firstName={profile.firstName}
              lastName={profile.lastName}
            />
          );
        })}
      </div>
    </div>
  );
}
