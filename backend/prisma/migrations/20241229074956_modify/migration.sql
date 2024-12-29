-- AlterTable
ALTER TABLE `todoitem` MODIFY `description` VARCHAR(4000) NULL,
    MODIFY `updatedOn` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `city` VARCHAR(191) NULL,
    MODIFY `country` VARCHAR(191) NULL,
    MODIFY `introduction` VARCHAR(4000) NULL,
    MODIFY `updatedOn` DATETIME(3) NULL;
