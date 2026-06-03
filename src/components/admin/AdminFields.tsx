import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { uploadImage } from "@/lib/storage";
import { toast } from "sonner";
import { ImagePlus, Loader2 } from "lucide-react";

export function AdminField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</Label>
      <Input
        type={type}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function AdminArea({
  label,
  value,
  onChange,
  rows = 4,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</Label>
      <Textarea value={value ?? ""} rows={rows} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function AdminImage({
  label,
  value,
  folder,
  onChange,
}: {
  label: string;
  value?: string;
  folder: string;
  onChange: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const url = await uploadImage(file, folder);
    setUploading(false);
    if (url) {
      onChange(url);
      toast.success("Đã tải ảnh lên");
    }
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-2">
      <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</Label>
      <div className="flex items-start gap-3">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-border bg-secondary">
          {value ? (
            <img src={value} alt="preview" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              <ImagePlus className="h-5 w-5" />
            </div>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <Input value={value ?? ""} placeholder="URL ảnh hoặc tải lên →" onChange={(e) => onChange(e.target.value)} />
          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
          <Button type="button" variant="outline" size="sm" disabled={uploading} onClick={() => inputRef.current?.click()}>
            {uploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ImagePlus className="mr-2 h-4 w-4" />}
            {uploading ? "Đang tải..." : "Tải ảnh"}
          </Button>
        </div>
      </div>
    </div>
  );
}
