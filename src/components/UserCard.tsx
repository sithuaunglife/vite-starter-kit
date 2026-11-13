interface UserCardProps {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export function UserCard({ name, email, role, avatar }: UserCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border p-4">
      {/* Avatar */}
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="size-12 rounded-full object-cover"
        />
      ) : (
        <div className="flex size-12 items-center justify-center rounded-full bg-accent font-semibold">
          {name.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Information */}
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="truncate text-sm text-muted-foreground">{email}</p>
        <span className="text-xs text-muted-foreground">{role}</span>
      </div>
    </div>
  );
}
