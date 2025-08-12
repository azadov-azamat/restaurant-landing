import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ isAuthed, children }: { isAuthed: boolean; children: React.ReactNode }) {
  const loc = useLocation();
  if (!isAuthed) return <Navigate to="/login" replace state={{ from: loc }} />;
  return <>{children}</>;
}
