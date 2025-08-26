export type Reward =
    | { type: "currency" | "special" | "badge"; text: string }
    | { type: "stats"; stats: string[] };

export interface RewardTier {
    milestone: string;
    rewards: Reward[];
    active?: boolean;
}

export interface ActivityPageData {
    meta: {
        title: string;
        description: string;
    };
    headerTitle: string;
    scheduleTitle?: string;
    schedule?: string[];
    notes?: string[];
    rewardTiers: RewardTier[];
}


