-- CreateTable
CREATE TABLE "Domain" (
    "id" SERIAL NOT NULL,
    "domains" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(6),

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionHistory" (
    "id" SERIAL NOT NULL,
    "domainId" INTEGER NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(6),

    CONSTRAINT "QuestionHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "domainId" INTEGER NOT NULL,
    "questionHistoryId" INTEGER NOT NULL,
    "userId" VARCHAR(40) NOT NULL,
    "user" JSONB,
    "content" TEXT,
    "type" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(6),

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Domain_domains_key" ON "Domain"("domains");

-- CreateIndex
CREATE INDEX "Domain_domains_idx" ON "Domain"("domains");

-- CreateIndex
CREATE INDEX "QuestionHistory_name_idx" ON "QuestionHistory"("name");

-- CreateIndex
CREATE INDEX "QuestionHistory_createdAt_idx" ON "QuestionHistory"("createdAt");

-- CreateIndex
CREATE INDEX "QuestionHistory_deletedAt_idx" ON "QuestionHistory"("deletedAt");

-- CreateIndex
CREATE INDEX "Chat_userId_idx" ON "Chat"("userId");

-- CreateIndex
CREATE INDEX "Chat_domainId_idx" ON "Chat"("domainId");

-- CreateIndex
CREATE INDEX "Chat_type_idx" ON "Chat"("type");

-- CreateIndex
CREATE INDEX "Chat_success_idx" ON "Chat"("success");

-- CreateIndex
CREATE INDEX "Chat_createdAt_idx" ON "Chat"("createdAt");

-- CreateIndex
CREATE INDEX "Chat_deletedAt_idx" ON "Chat"("deletedAt");

-- AddForeignKey
ALTER TABLE "QuestionHistory" ADD CONSTRAINT "QuestionHistory_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_questionHistoryId_fkey" FOREIGN KEY ("questionHistoryId") REFERENCES "QuestionHistory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
