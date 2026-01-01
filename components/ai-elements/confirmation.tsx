"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ToolUIPart } from "ai";
import {
  type ComponentProps,
  createContext,
  type ReactNode,
  useContext,
} from "react";

/* -------------------------------------------------------------------------- */
/*                                Type Helpers                                 */
/* -------------------------------------------------------------------------- */

type ExtendedToolState =
  | ToolUIPart["state"]
  | "approval-requested"
  | "approval-responded"
  | "output-denied"
  | "output-available";

type ToolUIPartApproval =
  | {
      id: string;
      approved?: never;
      reason?: never;
    }
  | {
      id: string;
      approved: boolean;
      reason?: string;
    }
  | undefined;

type ConfirmationContextValue = {
  approval: ToolUIPartApproval;
  state: ExtendedToolState;
};

/* -------------------------------------------------------------------------- */
/*                               Context & Hook                                */
/* -------------------------------------------------------------------------- */

const ConfirmationContext = createContext<ConfirmationContextValue | null>(
  null
);

const useConfirmation = () => {
  const context = useContext(ConfirmationContext);

  if (!context) {
    throw new Error("Confirmation components must be used within Confirmation");
  }

  return context;
};

/* -------------------------------------------------------------------------- */
/*                                Main Wrapper                                 */
/* -------------------------------------------------------------------------- */

export type ConfirmationProps = ComponentProps<typeof Alert> & {
  approval?: ToolUIPartApproval;
  state: ExtendedToolState;
};

export const Confirmation = ({
  className,
  approval,
  state,
  ...props
}: ConfirmationProps) => {
  if (!approval || state === "input-streaming" || state === "input-available") {
    return null;
  }

  return (
    <ConfirmationContext.Provider value={{ approval, state }}>
      <Alert className={cn("flex flex-col gap-2", className)} {...props} />
    </ConfirmationContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Sub Components                                 */
/* -------------------------------------------------------------------------- */

export type ConfirmationTitleProps = ComponentProps<typeof AlertDescription>;

export const ConfirmationTitle = ({
  className,
  ...props
}: ConfirmationTitleProps) => (
  <AlertDescription className={cn("inline", className)} {...props} />
);

/* --------------------------- Request (Pending) ----------------------------- */

export type ConfirmationRequestProps = {
  children?: ReactNode;
};

export const ConfirmationRequest = ({ children }: ConfirmationRequestProps) => {
  const { state } = useConfirmation();

  if (state !== "approval-requested") {
    return null;
  }

  return <>{children}</>;
};

/* ----------------------------- Accepted ------------------------------------ */

export type ConfirmationAcceptedProps = {
  children?: ReactNode;
};

export const ConfirmationAccepted = ({
  children,
}: ConfirmationAcceptedProps) => {
  const { approval, state } = useConfirmation();

  if (
    !approval?.approved ||
    (state !== "approval-responded" &&
      state !== "output-denied" &&
      state !== "output-available")
  ) {
    return null;
  }

  return <>{children}</>;
};

/* ----------------------------- Rejected ------------------------------------ */

export type ConfirmationRejectedProps = {
  children?: ReactNode;
};

export const ConfirmationRejected = ({
  children,
}: ConfirmationRejectedProps) => {
  const { approval, state } = useConfirmation();

  if (
    approval?.approved !== false ||
    (state !== "approval-responded" &&
      state !== "output-denied" &&
      state !== "output-available")
  ) {
    return null;
  }

  return <>{children}</>;
};

/* ----------------------------- Actions ------------------------------------- */

export type ConfirmationActionsProps = ComponentProps<"div">;

export const ConfirmationActions = ({
  className,
  ...props
}: ConfirmationActionsProps) => {
  const { state } = useConfirmation();

  if (state !== "approval-requested") {
    return null;
  }

  return (
    <div
      className={cn("flex items-center justify-end gap-2 self-end", className)}
      {...props}
    />
  );
};

export type ConfirmationActionProps = ComponentProps<typeof Button>;

export const ConfirmationAction = (props: ConfirmationActionProps) => (
  <Button className="h-8 px-3 text-sm" type="button" {...props} />
);
