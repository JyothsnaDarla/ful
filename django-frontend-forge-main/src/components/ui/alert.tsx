import { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function NewsPage() {
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/news/");
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      console.log(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Load News</button>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
