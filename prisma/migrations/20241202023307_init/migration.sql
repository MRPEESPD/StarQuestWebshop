-- DropIndex
DROP INDEX `tbl_users_id_key` ON `tbl_users`;

-- CreateTable
CREATE TABLE `slide` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `slide_image_key`(`image`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
