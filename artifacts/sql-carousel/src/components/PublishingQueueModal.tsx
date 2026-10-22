import React, { useState } from "react";
import { X, Calendar, CheckCircle2, Clock, Share2, ArrowRight, Sparkles } from "lucide-react";
import type { Theme } from "@workspace/carousel-engine";

export interface ScheduledPost {
  id: string;
  topicKey: string;
  title: string;
  day: string;
  dateStr: string;
  category: string;
  platforms: ("IG" | "LI" | "X")[];
  status: "Draft" | "Ready" | "Scheduled" | "Published";
}

interface PublishingQueueModalProps {
  isOpen: boolean;
  theme: Theme;
  onClose: () => void;
  onSelectTopic: (topicKey: string) => void;
}

const INITIAL_SCHEDULE: ScheduledPost[] = [
  {
    id: "1",
    topicKey: "institutional-showcase",
    title: "The Institutional Component Engine (Studio 2.0)",
    day: "Monday",
    dateStr: "Oct 26",
    category: "Showcase",
    platforms: ["IG", "LI", "X"],
    status: "Ready",
  },
  {
    id: "2",
    topicKey: "ai-valuation-selloff",
    title: "The $725B AI Valuation Sell-Off Teardown",
    day: "Wednesday",
    dateStr: "Oct 28",
    category: "Macro",
    platforms: ["IG", "LI", "X"],
    status: "Scheduled",
  },
  {
    id: "3",
    topicKey: "corporate-bitcoin-standard",
    title: "The Corporate Bitcoin Standard Playbook",
    day: "Friday",
    dateStr: "Oct 30",
    category: "Crypto",
    platforms: ["X", "LI"],
    status: "Draft",
  },
  {
    id: "4",
    topicKey: "india-real-estate",
    title: "Indian Real Estate Supercycle Breakdown",
    day: "Sunday",
    dateStr: "Nov 01",
    category: "India",
    platforms: ["IG", "LI"],
    status: "Published",
  },
];

export function PublishingQueueModal({ isOpen, theme, onClose, onSelectTopic }: PublishingQueueModalProps) {
  if (!isOpen) return null;

  const [posts, setPosts] = useState<ScheduledPost[]>(INITIAL_SCHEDULE);

  const toggleStatus = (id: string) => {
    const nextStatus: Record<ScheduledPost["status"], ScheduledPost["status"]> = {
      Draft: "Ready",
      Ready: "Scheduled",
      Scheduled: "Published",
      Published: "Draft",
    };

    setPosts(prev =>
      prev.map(p => (p.id === id ? { ...p, status: nextStatus[p.status] } : p))
    );
  };

  const statusColors = {
    Draft: { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.5)", border: "rgba(255,255,255,0.1)" },
    Ready: { bg: "#F59E0B22", text: "#F59E0B", border: "#F59E0B44" },
    Scheduled: { bg: `${theme.primary}22`, text: theme.primary, border: `${theme.primary}44` },
    Published: { bg: "#00F5A022", text: "#00F5A0", border: "#00F5A044" },
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(12px)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    }}>
      <div style={{
        width: "100%",
        maxWidth: 820,
        maxHeight: "88vh",
        background: "#08090C",
        border: `1px solid ${theme.primary}55`,
        borderRadius: 16,
        boxShadow: `0 24px 60px rgba(0,0,0,0.95), 0 0 35px ${theme.primary}22`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          padding: "18px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0C0D12",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Calendar size={18} color={theme.primary} />
            <div>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#FFF" }}>
                Editorial Content Queue & Publishing Planner
              </span>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", margin: "2px 0 0" }}>
                Multi-platform distribution across Instagram, LinkedIn, and X.
              </p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
            <X size={18} />
          </button>
        </div>

        {/* Stats Row */}
        <div style={{
          padding: "12px 24px",
          background: "rgba(255,255,255,0.02)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          gap: 20,
        }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
            Ready to Post: <strong style={{ color: "#F59E0B" }}>{posts.filter(p => p.status === "Ready").length}</strong>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
            Scheduled: <strong style={{ color: theme.primary }}>{posts.filter(p => p.status === "Scheduled").length}</strong>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
            Published: <strong style={{ color: "#00F5A0" }}>{posts.filter(p => p.status === "Published").length}</strong>
          </div>
        </div>

        {/* Schedule List */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
          {posts.map(post => {
            const sc = statusColors[post.status];
            return (
              <div
                key={post.id}
                style={{
                  background: "#0E1017",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  transition: "all 0.15s ease",
                }}
              >
                {/* Date / Day badge */}
                <div style={{ width: 80, flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: theme.primary, textTransform: "uppercase", letterSpacing: 1 }}>
                    {post.day}
                  </span>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#FFF" }}>{post.dateStr}</div>
                </div>

                {/* Title & Platforms */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", marginBottom: 6 }}>
                    {post.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{post.category}</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
                    <div style={{ display: "flex", gap: 4 }}>
                      {post.platforms.map(p => (
                        <span
                          key={p}
                          style={{
                            fontSize: 9,
                            fontWeight: 800,
                            padding: "1px 5px",
                            borderRadius: 3,
                            background: "rgba(255,255,255,0.05)",
                            color: "rgba(255,255,255,0.7)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Status Toggle Button */}
                  <button
                    onClick={() => toggleStatus(post.id)}
                    title="Click to advance status"
                    style={{
                      background: sc.bg,
                      color: sc.text,
                      border: `1px solid ${sc.border}`,
                      borderRadius: 6,
                      padding: "5px 12px",
                      fontSize: 10,
                      fontWeight: 800,
                      cursor: "pointer",
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {post.status}
                  </button>

                  {/* Load on Stage */}
                  <button
                    onClick={() => {
                      onSelectTopic(post.topicKey);
                      onClose();
                    }}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 6,
                      padding: "5px 12px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#FFF",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      cursor: "pointer",
                    }}
                  >
                    Load in Stage <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
