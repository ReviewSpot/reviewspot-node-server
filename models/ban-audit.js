import mongoose from "mongoose";
const { Schema } = mongoose;

export const banAuditSchema = new Schema(
    {
        bannedUser: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        submittedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        reason: {
            type: String,
            required: true,
        },
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

export const BanAudit = mongoose.model("BanAudit", banAuditSchema);
