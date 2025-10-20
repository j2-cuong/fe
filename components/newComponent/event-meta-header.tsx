import { User, Calendar, Tag } from "lucide-react";

export default function EventMetaHeader({ meta }: { meta: any }) {
  return (
    <header className="mb-8 relative z-10">
      <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4">
        {meta.title}
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-blue-500" />
          <span className="text-red-500">{meta.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-red-500" />
          <span>{new Date(meta.createdAt).toLocaleDateString("vi-VN")}</span>
        </div>
        {meta.tags && (
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-yellow-500" />
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
              {meta.tags.join(", ")}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
