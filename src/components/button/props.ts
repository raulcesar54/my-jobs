export interface ButtonProps {
  label: string;
  variant?: "PRIMARY" | "LINK" | "SECONDARY";
  onPress?: () => void;
  type?: "button" | "reset" | "submit";
}
