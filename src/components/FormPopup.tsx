import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import EmbeddedForm from "@/components/EmbeddedForm";

interface FormPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FormPopup({ open, onOpenChange }: FormPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden max-w-lg w-full">
        <DialogHeader className="sr-only">
          <DialogTitle>Get Your Free Estimate</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <EmbeddedForm height={520} />
      </DialogContent>
    </Dialog>
  );
}
