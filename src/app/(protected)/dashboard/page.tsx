"use client";

import useProject from "@/hooks/use-project";
import { useUser } from "@clerk/nextjs";
import {ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  const { project } = useProject();
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        {/*github link*/}
        <div className="w-fit rounded-md bg-primary px-4 py-3">
          <div className="flex items-center">
            <Github className="text-size-5 text-white" />
            <div className="ml-2">
              <p className="text-sm font-medium text-white">
                This project is linked to{" "}
                <Link
                  href={project?.githubUrl ?? ""}
                  className="inline-flex items-center text-white hover:underline"
                >
                  {project?.githubUrl}
                </Link>
                <ExternalLink className="ml-1 size-4" />
              </p>
            </div>
          </div>
        </div>

        <div className="h-4"></div>

        <div className="flex items-center gap-4">
            TeamMembers
            InviteButton
            ArchiveButton
        </div>
      </div>

      <div className="mt-4">
        
      </div>
    </div>
  );
};
