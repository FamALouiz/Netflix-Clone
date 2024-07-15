"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Profile from "./profile";

export default function ProfilePage() {
  const [profiles, setProfiles] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_PROFILE_URL || "";
    axios
      .get(url + id)
      .then((response) => {
        const profiles = response.data.map((profile: any) => {
          return {
            firstName: profile.first_name,
            lastName: profile.last_name,
          };
        });
        setProfiles(profiles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {profiles.map((profile: Profile, idx: number) => {
        return (
          <h1 key={idx} className="text-white">
            {profile.firstName} {profile.lastName}
          </h1>
        );
      })}
    </div>
  );
}
