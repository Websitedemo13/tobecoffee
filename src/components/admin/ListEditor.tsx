import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Plus } from "lucide-react";
import { AdminField, AdminArea, AdminImage } from "./AdminFields";

export type FieldDef = {
  key: string;
  label: string;
  kind: "text" | "area" | "image" | "number";
  folder?: string;
};

interface ListEditorProps<T> {
  title: string;
  items: T[];
  fields: FieldDef[];
  onChange: (items: T[]) => void;
  newItem: (items: T[]) => T;
  titleKey?: string;
}

export function ListEditor<T extends Record<string, unknown>>({
  title,
  items,
  fields,
  onChange,
  newItem,
  titleKey,
}: ListEditorProps<T>) {
  const update = (index: number, key: string, value: unknown) => {
    onChange(items.map((it, i) => (i === index ? { ...it, [key]: value } : it)));
  };
  const remove = (index: number) => onChange(items.filter((_, i) => i !== index));
  const add = () => onChange([...items, newItem(items)]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-bold">{title}</h3>
        <Button type="button" variant="outline" size="sm" onClick={add}>
          <Plus className="mr-2 h-4 w-4" /> Thêm
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index} className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-muted-foreground">
                {titleKey ? String(item[titleKey] ?? `#${index + 1}`) : `#${index + 1}`}
              </span>
              <Button type="button" variant="ghost" size="sm" onClick={() => remove(index)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((f) => {
                const span = f.kind === "area" || f.kind === "image" ? "sm:col-span-2" : "";
                return (
                  <div key={f.key} className={span}>
                    {f.kind === "text" && (
                      <AdminField label={f.label} value={item[f.key] as string} onChange={(v) => update(index, f.key, v)} />
                    )}
                    {f.kind === "number" && (
                      <AdminField
                        label={f.label}
                        type="number"
                        value={item[f.key] as number}
                        onChange={(v) => update(index, f.key, Number(v) || 0)}
                      />
                    )}
                    {f.kind === "area" && (
                      <AdminArea label={f.label} value={item[f.key] as string} onChange={(v) => update(index, f.key, v)} />
                    )}
                    {f.kind === "image" && (
                      <AdminImage
                        label={f.label}
                        folder={f.folder ?? "general"}
                        value={item[f.key] as string}
                        onChange={(v) => update(index, f.key, v)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
        {items.length === 0 && (
          <p className="rounded-md border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            Chưa có mục nào. Nhấn "Thêm" để tạo mới.
          </p>
        )}
      </div>
    </div>
  );
}
