-- DropForeignKey
ALTER TABLE `todoitem` DROP FOREIGN KEY `TodoItem_userId_fkey`;

-- DropIndex
DROP INDEX `TodoItem_userId_key` ON `todoitem`;

-- AlterTable
ALTER TABLE `todoitem` MODIFY `title` VARCHAR(4000) NOT NULL;

-- CreateIndex
CREATE INDEX `TodoItem_userId_idx` ON `TodoItem`(`userId`);

-- AddForeignKey
ALTER TABLE `TodoItem` ADD CONSTRAINT `TodoItem_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
