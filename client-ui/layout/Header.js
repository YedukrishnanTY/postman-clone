import React from "react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
export default function UI({}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <div>
        <Button
          color="primary"
          variant="flat"
          radius="full"
          onClick={() => setTheme("light")}
        >
          Light
        </Button>
        <Button
          color="primary"
          variant="flat"
          radius="full"
          onClick={() => setTheme("dark")}
        >
          Dark
        </Button>
      </div>
    </div>
  );
}
