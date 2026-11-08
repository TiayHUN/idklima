import { Component, type ReactNode, lazy, Suspense } from "react";

const LazyChatWidget = lazy(() => import("./ChatWidget").then((m) => ({ default: m.ChatWidget })));

type Props = { children?: ReactNode };
type State = { hasError: boolean; error?: Error };

export class ChatWidgetErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: any) {
    console.warn("ChatWidget isolated error:", error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return null;
    }
    return (
      <Suspense fallback={null}>
        <LazyChatWidget />
      </Suspense>
    );
  }
}
