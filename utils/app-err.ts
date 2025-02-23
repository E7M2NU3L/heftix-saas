"use client"

import { toast } from "~/hooks/use-toast";

export function AppErrClient(err : any) {
    if (err instanceof Error) {
        toast({
            title : err.name,
            description : err.message,
            variant : "destructive"
        })
    }
    else {
        toast({
            title : "Failed",
            description : "Unknown Error Occured",
            variant : "destructive"
        })
    }
};

// "lint": "next lint",
// "lint:fix": "next lint --fix",