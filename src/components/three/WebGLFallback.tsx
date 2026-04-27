interface WebGLFallbackProps {
  className?: string;
}

export default function WebGLFallback({ className }: WebGLFallbackProps) {
  return <div className={className} style={{ background: "#000000" }} />;
}
