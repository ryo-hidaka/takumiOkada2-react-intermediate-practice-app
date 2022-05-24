import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((prpos) => {
  const { children, onClick, disabled = false, isLoading = false } = prpos;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
