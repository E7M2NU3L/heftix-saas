"use client"

import { toast } from "sonner"

export function AppErrClient(err : any) {
    if (err instanceof Error) {
        toast(err.name, {
            description : err.message,
        })
    }
    else {
        toast("Failed", {
            description : "Unknown Error Occured",
        })
    }
};

// "lint": "next lint",
// "lint:fix": "next lint --fix",