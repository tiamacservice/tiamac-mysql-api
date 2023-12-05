-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2023 at 12:51 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tiam_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `no_telp` int(11) NOT NULL,
  `provinsi` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `uuid`, `name`, `email`, `password`, `no_telp`, `provinsi`, `alamat`, `createdAt`, `updatedAt`) VALUES
(1, 'dfb4f26f-252d-4690-8565-bdc59dde6ffc', 'cust1', 'cust2@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$/jUY+zXqyD+k6t9g342CZQ$MGlYTPqHAurZCzrALsYOviOzbv1U2DRdjB5o45JzErc', 812341234, 'Jakarta timur', 'Cengkareng, kapuk', '2023-07-12 22:54:33', '2023-07-12 22:54:33'),
(3, '3512ef7d-3cca-492a-a864-975566b8e4ae', 'Budi', 'budi@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$74049uzxZquSbeiPehHG3A$8HLCFJqS689SmziSMuKu+ahZ1K91UyhONkyJFRoIKsQ', 1234567890, 'Jakarta Barat', 'cdngkareng', '2023-07-17 23:03:05', '2023-07-17 23:03:05');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `uuid`, `name`, `price`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '1ec2f614-746d-4ef7-9be5-56d231027a7c', 'produk ueeeed', 123, 3, '2023-11-15 20:46:40', '2023-11-15 20:47:17');

-- --------------------------------------------------------

--
-- Table structure for table `servis`
--

CREATE TABLE `servis` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `dateServis` date DEFAULT NULL,
  `customerId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `ser1` varchar(255) DEFAULT NULL,
  `ser2` varchar(255) DEFAULT NULL,
  `ser3` varchar(255) DEFAULT NULL,
  `ser4` varchar(255) DEFAULT NULL,
  `hrg1` int(11) DEFAULT NULL,
  `hrg2` int(11) DEFAULT NULL,
  `hrg3` int(11) DEFAULT NULL,
  `hrg4` int(11) DEFAULT NULL,
  `totalHarga` bigint(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `servis`
--

INSERT INTO `servis` (`id`, `uuid`, `status`, `alamat`, `provinsi`, `dateServis`, `customerId`, `userId`, `ser1`, `ser2`, `ser3`, `ser4`, `hrg1`, `hrg2`, `hrg3`, `hrg4`, `totalHarga`, `createdAt`, `updatedAt`) VALUES
(12, 'c753ba94-81a0-4fb9-ac08-f01def5656e1', 'Menunggu Jadwal', 'Cengkareng', 'Jakarta Barat', '2023-11-24', 1, 2, 'Cuci AC 1 PK', 'Tidak', 'Tidak', 'Tidak', 50000, 100000, 0, 0, 200000, '2023-11-14 16:17:21', '2023-11-15 23:08:24'),
(13, 'f1e1edbc-75c1-4a70-82eb-95a2d7c502e8', 'Selesai', 'Kebon Jeruk', 'Jakarta Selatan', '2023-11-11', 1, 3, '', '', '', '', 50000, 0, 0, 0, 600000, '2023-11-15 23:46:23', '2023-11-15 23:46:23'),
(14, 'da25caa8-2435-4d97-a163-516cce1c4b1f', 'Proses Servis', 'Cengkareng GangsetiaIII', 'Jakarta Barat', '2023-11-11', 3, 3, 'Update', 'lupdatek', 'update', 'update', 44444, 44444, 44444, 44444, 350000, '2023-11-16 21:53:21', '2023-11-19 15:13:37'),
(15, '182f2ecb-5e0d-483d-af62-0648db7dee14', 'Menunggu Pembayaran', 'Cengkareng GangsetiaIII', 'Jakarta Barat', '2023-11-11', 3, 3, 'Update', 'lupdatek', 'update', 'update', 50000, 100000, 250000, 150000, 300000, '2023-11-16 21:53:29', '2023-11-19 20:18:35'),
(16, 'c174e7ff-20a8-4bef-8385-423429470da4', 'Konfirmasi Customer', 'Cengkareng GangsetiaIII', 'Jakarta Barat', '2023-11-11', 3, 3, 'Cuci 1pk', 'las + isi freon 1pk', 'ganti transistor 1pk', 'bongkar pasang 2pk', 200000, 300000, 400000, 500000, 500000, '2023-11-16 21:53:29', '2023-11-16 21:53:29'),
(17, 'cdc6409b-7718-4008-9a01-8e23a76337d2', 'Selesai', 'Cengkareng GangsetiaIII', 'Jakarta Barat', '2023-11-11', 3, 3, 'Cuci 1pk', 'las + isi freon 1pk', 'ganti transistor 1pk', 'bongkar pasang 2pk', 200000, 300000, 400000, 500000, 500000, '2023-11-16 21:53:30', '2023-11-16 21:53:30'),
(18, '3d48ae47-bb23-4ea6-adf4-29178852d536', 'Konfirmasi Teknisi', 'Cengkareng GangsetiaIII', 'Jakarta Barat', '2023-11-11', 3, 3, 'UPPPPPPPPP', 'lUPPPPPPPPPk', 'UPPPPPPPPP', 'UPPPPPPPPP', 50000, 350000, 250000, 150000, 250000, '2023-11-16 21:53:30', '2023-11-19 20:20:22');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('-qenQKfJnTfho6VLfUS2AqJtSzQeJ7d1', '2023-11-25 06:57:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:57:15', '2023-11-24 06:57:15'),
('1OM6K8K4Txc9B3y2CGY3ttWPQMrToMmy', '2023-11-25 08:53:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 08:53:10', '2023-11-24 08:53:10'),
('1O_W4niw_BDGOUmETY3MMkMyidlBduCf', '2023-11-25 10:33:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"customerId\":\"3512ef7d-3cca-492a-a864-975566b8e4ae\"}', '2023-11-24 10:25:56', '2023-11-24 10:33:31'),
('2IVmqL_fBdIKyhUAvNAMC9pkRVQtMVZh', '2023-11-25 10:25:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:25:21', '2023-11-24 10:25:21'),
('2KNLEzAax0ac4K0IZFKiVCkG6PyLToyC', '2023-11-25 07:10:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:10:28', '2023-11-24 07:10:28'),
('3n0jn1kO2eh9yxG2PXGht3bMA_utaAi2', '2023-11-25 10:15:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:15:28', '2023-11-24 10:15:28'),
('5RAG5vVUfVtqIOQHfQKthQF3oebkWuZT', '2023-11-25 06:44:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:44:44', '2023-11-24 06:44:44'),
('7qZLgzmW4YR0YkWsJecbUX9hr8txX6cb', '2023-11-25 07:10:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:10:41', '2023-11-24 07:10:41'),
('9vjvM8r9vZoqCkph5H2zjAFuWQFH14M8', '2023-11-25 10:16:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:16:14', '2023-11-24 10:16:14'),
('b0P_BPcLvYPlZ6MFqU8N0ps1ZbH06fwd', '2023-11-25 10:20:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:20:24', '2023-11-24 10:20:24'),
('BXTDgG-kJHOMYREdCCPqfek-mZ1x6Wh1', '2023-11-25 06:46:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:46:54', '2023-11-24 06:46:54'),
('Cwh2cC06ZE-t43nO9zzI5PSj-awoQUOQ', '2023-11-25 06:54:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:54:12', '2023-11-24 06:54:12'),
('Dh1q7B_mT0ohI__srJ76F7Hm4Ak_e7wC', '2023-11-25 07:03:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:03:50', '2023-11-24 07:03:50'),
('FhsVI8C5H9UB7G-nfrhJDvbiVaeLw0wT', '2023-11-25 07:03:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:03:45', '2023-11-24 07:03:45'),
('FLY_LluKdO1_RiRpQkQ1JAd4e1O4ZsS8', '2023-11-25 09:49:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 09:49:30', '2023-11-24 09:49:30'),
('g-L-R_bQ5BiG6j_-jkuHasKRcjJv19xS', '2023-11-25 06:47:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:47:01', '2023-11-24 06:47:01'),
('G_GtJV5UrQGvEHKNdiMwFVO-WTbe8GW5', '2023-11-25 07:03:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:03:56', '2023-11-24 07:03:56'),
('HJl4j86vbyyx5KhjxW9IAIXXoqConAf-', '2023-11-25 10:15:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:15:58', '2023-11-24 10:15:58'),
('HUEHFxuzfpgXxw3YknFignEDAmLXzZlv', '2023-11-25 06:36:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:36:43', '2023-11-24 06:36:43'),
('i5kAYX1mfZdrZ6ArtW5q_pQvzkWWfvLb', '2023-11-25 09:49:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 09:49:22', '2023-11-24 09:49:22'),
('IqS6iMdmwTy3d83WwuW4gTh4KotbAgMF', '2023-11-25 10:16:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:16:19', '2023-11-24 10:16:19'),
('isfpJ-X_AVmBS-XBFOlGJoMTXI4xWNjd', '2023-11-25 10:26:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:26:01', '2023-11-24 10:26:01'),
('JeFR7hzCSjkdWUbKw0Tjo0AUMfZWBafX', '2023-11-25 09:25:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 09:25:03', '2023-11-24 09:25:03'),
('jv8emZ5mHKJzk4awrWNe0KVYgGqVn_dY', '2023-11-25 06:57:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:57:03', '2023-11-24 06:57:03'),
('kyZo-5ufWlQl1Vct-Qk8C6Gnf5AsEJmZ', '2023-11-25 08:52:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 08:52:25', '2023-11-24 08:52:25'),
('LnzDaBfiBbfuKKryMwphUjR5z0lDhyAM', '2023-11-25 10:15:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:15:42', '2023-11-24 10:15:42'),
('m7MayROtbAS9sqPhN4I3srhdlgSGRQYF', '2023-11-25 06:53:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:53:06', '2023-11-24 06:53:06'),
('mOl6jHfF0EnMml-Kqm_SU1S7lLy22Jhp', '2023-11-25 10:12:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:12:29', '2023-11-24 10:12:29'),
('MXbvMDf9LDIAeIVqes5acCjQ9HmfRWon', '2023-11-25 07:05:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:05:34', '2023-11-24 07:05:34'),
('n40bvseD5BbsG5YVTVMyQ475Asc8oWav', '2023-11-25 07:08:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:08:29', '2023-11-24 07:08:29'),
('NC9MdUBKupoZDFdCZL5lucLuFdPrX04j', '2023-11-25 06:54:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:54:40', '2023-11-24 06:54:40'),
('nnfIkxVJPMunYaRXbk5qjGcdj6vTjftK', '2023-11-25 07:58:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:58:24', '2023-11-24 07:58:24'),
('ObKebHETb6QQlPji_gPPSgf5TzuNuiTR', '2023-11-25 07:08:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:08:37', '2023-11-24 07:08:37'),
('PvW1JOoVO20YifoB3xVQIg6U15cJSJNV', '2023-11-25 07:01:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:01:19', '2023-11-24 07:01:19'),
('qct61m80H0Cr_BHpFzyB4r6k0labO5MH', '2023-11-25 06:44:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:44:52', '2023-11-24 06:44:52'),
('qs7RKFnwSrZ6n9zT8MLs-CjEKGGKvrgB', '2023-11-25 07:58:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:58:57', '2023-11-24 07:58:57'),
('rKcbPjV99L3T3Ohe9ar6wbDIXdjWL49O', '2023-11-25 07:05:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:05:27', '2023-11-24 07:05:27'),
('S25xCK9O0Q3-5yizRZClTombiA8MOxWh', '2023-11-25 09:25:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 09:25:21', '2023-11-24 09:25:21'),
('tXBVLDxh_6kqpgEPdU2ZNcWqgKeJWPoT', '2023-11-25 10:24:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:24:38', '2023-11-24 10:24:38'),
('Us_I6tzJwOiejyfd8jIfQiO8edgFsfYE', '2023-11-25 07:01:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:01:09', '2023-11-24 07:01:09'),
('UwOZ9sjXZNDAXAPL1RzwZZ75rDovsqaA', '2023-11-25 10:24:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:24:22', '2023-11-24 10:24:22'),
('UZQHxTX-V6tSd00LUSqMOW28rREKMDWS', '2023-11-25 09:24:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 09:24:55', '2023-11-24 09:24:55'),
('v3Qs1pI3LBczco1Gg8jeGtHKTYYQ2EmD', '2023-11-25 06:36:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:36:55', '2023-11-24 06:36:55'),
('vachok_MjfmYqIHLtwT7OtTb9_Z1LrVO', '2023-11-25 07:58:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:58:01', '2023-11-24 07:58:01'),
('vMWA7Um3xFBtnvMU6aWa6FIkYSaYUMOD', '2023-11-25 06:36:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 06:36:49', '2023-11-24 06:36:49'),
('W0JgnviHpqlFYuifJBv4-e0cwzcA0NEs', '2023-11-25 10:20:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:20:18', '2023-11-24 10:20:18'),
('WG28E5y52RmBgcT2ve3wS8cIMLDCZaZz', '2023-11-25 10:25:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:25:56', '2023-11-24 10:25:56'),
('xELlviFS0d2wUWLzpZ_nIV-5hr6zdm46', '2023-11-25 07:58:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:58:14', '2023-11-24 07:58:14'),
('YHV2SJyHzrvDuX9Ny9UiXpgOXayeiGoK', '2023-11-25 10:25:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:25:11', '2023-11-24 10:25:11'),
('yN1We2hqFi-mL-zbapqe5qSxoTKqn-cU', '2023-11-25 10:35:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"customerId\":\"dfb4f26f-252d-4690-8565-bdc59dde6ffc\"}', '2023-11-24 10:35:32', '2023-11-24 10:35:40'),
('z2cjw_FDkubmpgsYXvy65m_5IgVmupr8', '2023-11-25 07:57:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 07:57:49', '2023-11-24 07:57:49'),
('Z3mY8kmQsEZuyvBnf8JCLeVqdqIWhg_A', '2023-11-25 10:12:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:12:38', '2023-11-24 10:12:38'),
('ZjKZaZFNeJyAe20GHON3cNvL8GGCBbWG', '2023-11-25 10:25:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 10:25:47', '2023-11-24 10:25:47'),
('_673S651z5jlIgHH_S4XAsrIUKcbV598', '2023-11-25 08:49:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-24 08:49:31', '2023-11-24 08:49:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(2, 'a23b2e20-bdc9-407d-81d1-fca0d5e55c2c', 'ryan', 'admin@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$fx7k9iU+vnAnMMVyutjStw$D14Fh9GCyPj4cjvGyw3F43qh1pFlk0fVv3Tx/N/Gffo', 'admin', '2023-07-14 13:27:06', '2023-07-14 13:27:06'),
(3, '86a9c744-4e7f-4dce-83c0-d06ce8860154', 'johndoe', 'john@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$h6xRKXuKCtXV20ju8Vsorw$TjF2UG2tj8vGYjLwXyfrcFgFTKxDAwdTCfxAr2xZ7C4', 'karyawan', '2023-07-14 13:27:40', '2023-07-14 13:27:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `servis`
--
ALTER TABLE `servis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerId` (`customerId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `servis`
--
ALTER TABLE `servis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `servis`
--
ALTER TABLE `servis`
  ADD CONSTRAINT `servis_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `servis_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
