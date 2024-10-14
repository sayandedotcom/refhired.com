import { z } from "zod";

import { applyValidator, findReferrerValidator, referralPostValidator } from "@/lib/validators";

export type TReferralPost = z.infer<typeof referralPostValidator>;

export type TFindReferralPost = z.infer<typeof findReferrerValidator>;

export type TApplyPost = z.infer<typeof applyValidator>;
