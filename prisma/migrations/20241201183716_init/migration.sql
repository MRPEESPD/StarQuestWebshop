-- CreateTable
CREATE TABLE `tbl_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NULL,
    `realname` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `ip` VARCHAR(191) NOT NULL,
    `lastlogin` BIGINT NOT NULL,
    `x` DOUBLE NOT NULL,
    `y` DOUBLE NOT NULL,
    `z` DOUBLE NOT NULL,
    `world` VARCHAR(191) NOT NULL,
    `regdate` BIGINT NOT NULL,
    `regip` VARCHAR(191) NOT NULL,
    `yaw` DOUBLE NOT NULL,
    `pitch` DOUBLE NOT NULL,
    `email` VARCHAR(191) NULL,
    `isLogged` INTEGER NOT NULL,
    `hasSession` INTEGER NOT NULL,
    `totp` VARCHAR(191) NOT NULL,
    `point` DOUBLE NOT NULL DEFAULT 0.00,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `status` VARCHAR(191) NOT NULL DEFAULT 'true',

    UNIQUE INDEX `tbl_users_id_key`(`id`),
    UNIQUE INDEX `tbl_users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
