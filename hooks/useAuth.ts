
import { AuthContext, AuthContextType } from "@/context/AuthContext";
import React from "react";

/**
 * Easy to use hook for accessing the Next Fire Auth Context
 * @returns {AuthContextType} user and setLoading
 */
export const useAuth = (): AuthContextType =>
  React.useContext(AuthContext);