-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2021 at 04:59 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kst_inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brandId` int(11) NOT NULL,
  `brand` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brandId`, `brand`) VALUES
(1, 'Acer'),
(2, 'Dell');

-- --------------------------------------------------------

--
-- Table structure for table `checkin`
--

CREATE TABLE `checkin` (
  `checkinId` varchar(20) NOT NULL,
  `checkInDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `username` varchar(50) DEFAULT NULL,
  `employeeId` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `checkin`
--

INSERT INTO `checkin` (`checkinId`, `checkInDate`, `username`, `employeeId`) VALUES
('CI21900001', '2021-09-18 02:16:13', 'admin', 'EMP2190002');

-- --------------------------------------------------------

--
-- Table structure for table `checkindetail`
--

CREATE TABLE `checkindetail` (
  `checkinDetailId` int(11) NOT NULL,
  `checkinId` varchar(20) DEFAULT NULL,
  `deviceId` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `checkindetail`
--

INSERT INTO `checkindetail` (`checkinDetailId`, `checkinId`, `deviceId`) VALUES
(69, 'CI21900001', 'DV21900001');

-- --------------------------------------------------------

--
-- Table structure for table `checkinlog`
--

CREATE TABLE `checkinlog` (
  `logId` int(11) NOT NULL,
  `check_in_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `checkinId` varchar(20) DEFAULT NULL,
  `deviceId` varchar(50) DEFAULT NULL,
  `employeeId` varchar(50) DEFAULT NULL,
  `descriptions` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `checkinlog`
--

INSERT INTO `checkinlog` (`logId`, `check_in_date`, `checkinId`, `deviceId`, `employeeId`, `descriptions`) VALUES
(12, '2021-09-18 02:16:13', 'CI21900001', 'DV21900001', 'EMP2190002', 'kjkjg');

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE `checkout` (
  `checkoutId` varchar(20) NOT NULL,
  `checkOutDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `username` varchar(50) NOT NULL,
  `employeeId` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `checkout`
--

INSERT INTO `checkout` (`checkoutId`, `checkOutDate`, `username`, `employeeId`) VALUES
('CH2190001', '2021-09-18 01:30:18', 'admin', 'EMP2190005'),
('CH2190002', '2021-09-18 02:13:59', 'admin', 'EMP2190002'),
('CH2190003', '2021-09-18 02:15:42', 'admin', 'EMP2190002');

-- --------------------------------------------------------

--
-- Table structure for table `checkoutdetail`
--

CREATE TABLE `checkoutdetail` (
  `checkoutdetailId` int(11) NOT NULL,
  `checkoutId` varchar(20) DEFAULT NULL,
  `deviceId` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `checkoutdetail`
--

INSERT INTO `checkoutdetail` (`checkoutdetailId`, `checkoutId`, `deviceId`) VALUES
(113, 'CH2190001', 'DV21900003'),
(114, 'CH2190002', 'DV21900005');

-- --------------------------------------------------------

--
-- Table structure for table `checkoutlog`
--

CREATE TABLE `checkoutlog` (
  `logId` int(11) NOT NULL,
  `check_out_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `checkoutId` varchar(20) DEFAULT NULL,
  `deviceId` varchar(50) DEFAULT NULL,
  `employeeId` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `checkoutlog`
--

INSERT INTO `checkoutlog` (`logId`, `check_out_date`, `checkoutId`, `deviceId`, `employeeId`) VALUES
(41, '2021-09-18 01:30:18', 'CH2190001', 'DV21900003', 'EMP2190005'),
(42, '2021-09-18 02:13:59', 'CH2190002', 'DV21900005', 'EMP2190002'),
(43, '2021-09-18 02:15:42', 'CH2190003', 'DV21900001', 'EMP2190002');

-- --------------------------------------------------------

--
-- Table structure for table `companys`
--

CREATE TABLE `companys` (
  `companyId` int(11) NOT NULL,
  `company` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companys`
--

INSERT INTO `companys` (`companyId`, `company`, `description`, `address`, `tel`) VALUES
(7, 'IMDC', 'Group', 'Nongdoung', '2155555652'),
(14, 'KST', 'Group', 'wertyu', '234567'),
(15, 'KSD', 'Group', 'sdft', '23456789');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `departmentId` int(11) NOT NULL,
  `department` varchar(50) NOT NULL,
  `companyId` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`departmentId`, `department`, `companyId`, `description`) VALUES
(4, 'Business Development', 7, NULL),
(5, 'Data', NULL, 'KST');

-- --------------------------------------------------------

--
-- Table structure for table `deviceinfo`
--

CREATE TABLE `deviceinfo` (
  `deviceId` varchar(50) NOT NULL,
  `device_name` varchar(50) NOT NULL,
  `statuss` varchar(50) DEFAULT NULL,
  `comments` varchar(50) DEFAULT NULL,
  `joinDomain` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `servicetag_sn` varchar(50) DEFAULT NULL,
  `localId` varchar(50) DEFAULT NULL,
  `computername` varchar(50) DEFAULT NULL,
  `cpus` varchar(50) DEFAULT NULL,
  `ram` varchar(50) DEFAULT NULL,
  `hardisk` varchar(50) DEFAULT NULL,
  `provider` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `warranty` varchar(50) DEFAULT NULL,
  `startDate` varchar(50) DEFAULT NULL,
  `expireDate` varchar(50) DEFAULT NULL,
  `remark` varchar(50) DEFAULT NULL,
  `brandId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `buy_date` varchar(20) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `deviceinfo`
--

INSERT INTO `deviceinfo` (`deviceId`, `device_name`, `statuss`, `comments`, `joinDomain`, `model`, `servicetag_sn`, `localId`, `computername`, `cpus`, `ram`, `hardisk`, `provider`, `price`, `warranty`, `startDate`, `expireDate`, `remark`, `brandId`, `typeId`, `buy_date`, `image`, `create_date`) VALUES
('DV21900001', 'device_name', 'In Stock', 'JJKJFKJFKFJ', 'ksd.la', 'Model0123', 'SN12345', '123456', 'computer name', 'Core i7', '16Gb', '1Tb', 'Acer', '', '', NULL, NULL, '', 2, 27, NULL, NULL, '2021-09-17 19:15:28'),
('DV21900003', 'Computer', 'Repair', '', 'Workgroup', 'Model0123', 'SN12345', 'VTP-003', 'SH0012', 'Core i7', '16Gb', '1Tb', 'Acer', '', '', NULL, NULL, '', 2, 28, NULL, NULL, '2021-09-17 19:15:28'),
('DV21900004', 'Computer', 'In Stock', '', 'Workgroup', 'Model00345', 'SN23456', 'VTP-002', 'SH12345', 'Core i7', '16HB', '1TB', 'Acer', '', '', NULL, NULL, '', 1, 27, NULL, NULL, '2021-09-17 19:15:28'),
('DV21900005', 'Computer', 'In use', 'New', 'Workgroup', 'Model2345', 'SN23456', 'VTP-123456', 'Laptop computer', 'Core i7', '16GB', '1TB', 'Dell', '1000000', '', NULL, NULL, '', 2, 27, NULL, NULL, '2021-09-18 01:38:15');

-- --------------------------------------------------------

--
-- Table structure for table `devicetype`
--

CREATE TABLE `devicetype` (
  `typeId` int(11) NOT NULL,
  `devicetype` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `devicetype`
--

INSERT INTO `devicetype` (`typeId`, `devicetype`) VALUES
(27, 'Laptop'),
(28, 'Desktop');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employeeId` varchar(50) NOT NULL,
  `name_la` varchar(255) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `name_en` varchar(255) DEFAULT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `positionId` int(11) DEFAULT NULL,
  `companyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employeeId`, `name_la`, `gender`, `name_en`, `nickname`, `email`, `departmentId`, `positionId`, `companyId`) VALUES
('EMP2190001', 'ສົມສັກ', 'Male', 'Somsak', 'Sak', 'somsak@ksd.la', 4, 1, 14),
('EMP2190002', 'ສົມຊາຍ', 'Male', 'Somsay', 'Say', 'somsay@ksd.la', 5, 3, 14),
('EMP2190003', 'ສົມສີ', 'Male', 'Somsy', 'Som', 'somsay@ksd.la', 4, 3, 7),
('EMP2190005', 'ສັກດາ', 'Male', 'Sakda', 'Dada', 'sakda@ksd.la', 5, 3, 7);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `orderdetailId` int(11) NOT NULL,
  `orderId` varchar(50) NOT NULL,
  `deviceId` varchar(50) NOT NULL,
  `price` varchar(50) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` varchar(50) NOT NULL,
  `order_date` datetime DEFAULT current_timestamp(),
  `provider` varchar(255) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `order_date`, `provider`, `username`) VALUES
('OR2190001', '0000-00-00 00:00:00', 'Acer', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `positionId` int(11) NOT NULL,
  `position` varchar(50) NOT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`positionId`, `position`, `departmentId`, `description`) VALUES
(1, 'Sale', NULL, 'jkljkpgkprpgpo'),
(2, 'Marketing', NULL, 'KST'),
(3, 'Manager', NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `receivelog`
--

CREATE TABLE `receivelog` (
  `logId` int(11) NOT NULL,
  `repairId` varchar(20) DEFAULT NULL,
  `receive_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `deviceId` varchar(50) DEFAULT NULL,
  `employeeId` varchar(50) DEFAULT NULL,
  `descriptions` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `receivelog`
--

INSERT INTO `receivelog` (`logId`, `repairId`, `receive_date`, `deviceId`, `employeeId`, `descriptions`) VALUES
(7, 'RP2190001', '2021-09-18 02:17:53', 'DV21900004', 'EMP2190005', 'kkjfkjgkjit');

-- --------------------------------------------------------

--
-- Table structure for table `repairlog`
--

CREATE TABLE `repairlog` (
  `logId` int(11) NOT NULL,
  `log_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `repairId` varchar(50) DEFAULT NULL,
  `deviceId` varchar(50) DEFAULT NULL,
  `employeeId` varchar(50) DEFAULT NULL,
  `descriptions` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `repairlog`
--

INSERT INTO `repairlog` (`logId`, `log_date`, `repairId`, `deviceId`, `employeeId`, `descriptions`) VALUES
(21, '2021-09-17 05:05:03', 'RP2190001', 'DV21900004', '-', 'jgjijtjhijthnkjijkhkotjiojkgtkojgntjkgojo'),
(22, '2021-09-18 02:17:16', 'RP2190002', 'DV21900003', 'EMP2190005', 'djkjgkiorij');

-- --------------------------------------------------------

--
-- Table structure for table `repairs`
--

CREATE TABLE `repairs` (
  `repairId` varchar(50) NOT NULL,
  `repair_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `employeeId` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `descriptions` varchar(255) DEFAULT NULL,
  `deviceId` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `repairs`
--

INSERT INTO `repairs` (`repairId`, `repair_date`, `employeeId`, `username`, `descriptions`, `deviceId`) VALUES
('RP2190002', '2021-09-18 02:17:16', 'EMP2190005', 'admin', 'djkjgkiorij', 'DV21900003');

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

CREATE TABLE `transfers` (
  `transferId` int(11) NOT NULL,
  `transfertype` varchar(50) NOT NULL,
  `employeeId` varchar(50) NOT NULL,
  `deviceId` varchar(50) NOT NULL,
  `transfer_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `passwords` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `last_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `passwords`, `surname`, `create_date`, `last_update`) VALUES
('admin', '654321', 'Admin', '2021-09-17 16:34:18', '2021-09-17 23:38:47');

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_checkin`
-- (See below for the actual view)
--
CREATE TABLE `v_checkin` (
`employeeId` varchar(50)
,`gender` varchar(10)
,`name_la` varchar(255)
,`name_en` varchar(255)
,`nickname` varchar(50)
,`email` varchar(50)
,`position` varchar(50)
,`department` varchar(50)
,`company` varchar(50)
,`total` bigint(21)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_devices`
-- (See below for the actual view)
--
CREATE TABLE `v_devices` (
`deviceId` varchar(50)
,`localId` varchar(50)
,`device_name` varchar(50)
,`computername` varchar(50)
,`comments` varchar(50)
,`joinDomain` varchar(50)
,`model` varchar(50)
,`servicetag_sn` varchar(50)
,`provider` varchar(50)
,`deviceType` varchar(50)
,`brand` varchar(50)
,`cpus` varchar(50)
,`ram` varchar(50)
,`hardisk` varchar(50)
,`price` varchar(50)
,`expireDate` varchar(50)
,`remark` varchar(50)
,`statuss` varchar(50)
,`buy_date` varchar(20)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_employee`
-- (See below for the actual view)
--
CREATE TABLE `v_employee` (
`employeeId` varchar(50)
,`gender` varchar(10)
,`name_la` varchar(255)
,`name_en` varchar(255)
,`nickname` varchar(50)
,`email` varchar(50)
,`position` varchar(50)
,`department` varchar(50)
,`company` varchar(50)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_employee_device`
-- (See below for the actual view)
--
CREATE TABLE `v_employee_device` (
`employeeId` varchar(50)
,`gender` varchar(10)
,`name_la` varchar(255)
,`nickname` varchar(50)
,`name_en` varchar(255)
,`email` varchar(50)
,`department` varchar(50)
,`position` varchar(50)
,`company` varchar(50)
,`total` bigint(21)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_employee_using`
-- (See below for the actual view)
--
CREATE TABLE `v_employee_using` (
`employeeId` varchar(50)
,`name_en` varchar(255)
,`name_la` varchar(255)
,`nickname` varchar(50)
,`email` varchar(50)
,`checkoutId` varchar(20)
,`deviceId` varchar(50)
,`device_name` varchar(50)
,`statuss` varchar(50)
,`joinDomain` varchar(50)
,`localId` varchar(50)
,`devicetype` varchar(50)
,`brand` varchar(50)
,`model` varchar(50)
,`servicetag_sn` varchar(50)
,`cpus` varchar(50)
,`ram` varchar(50)
,`hardisk` varchar(50)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_empoyees`
-- (See below for the actual view)
--
CREATE TABLE `v_empoyees` (
`employeeId` varchar(50)
,`gender` varchar(10)
,`name_la` varchar(255)
,`name_en` varchar(255)
,`nickname` varchar(50)
,`email` varchar(50)
,`position` varchar(50)
,`department` varchar(50)
,`company` varchar(50)
,`device` bigint(21)
);

-- --------------------------------------------------------

--
-- Structure for view `v_checkin`
--
DROP TABLE IF EXISTS `v_checkin`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_checkin`  AS SELECT `employee`.`employeeId` AS `employeeId`, `employee`.`gender` AS `gender`, `employee`.`name_la` AS `name_la`, `employee`.`name_en` AS `name_en`, `employee`.`nickname` AS `nickname`, `employee`.`email` AS `email`, `positions`.`position` AS `position`, `departments`.`department` AS `department`, `companys`.`company` AS `company`, count(`checkoutdetail`.`deviceId`) AS `total` FROM ((((((`employee` join `positions` on(`employee`.`positionId` = `positions`.`positionId`)) join `departments` on(`employee`.`departmentId` = `departments`.`departmentId`)) join `companys` on(`employee`.`companyId` = `companys`.`companyId`)) join `checkout` on(`employee`.`employeeId` = `checkout`.`employeeId`)) join `checkoutdetail` on(`checkout`.`checkoutId` = `checkoutdetail`.`checkoutId`)) join `deviceinfo` on(`deviceinfo`.`deviceId` = `checkoutdetail`.`deviceId`)) WHERE `deviceinfo`.`statuss` = 'In use' GROUP BY `employee`.`employeeId` ;

-- --------------------------------------------------------

--
-- Structure for view `v_devices`
--
DROP TABLE IF EXISTS `v_devices`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_devices`  AS SELECT `deviceinfo`.`deviceId` AS `deviceId`, `deviceinfo`.`localId` AS `localId`, `deviceinfo`.`device_name` AS `device_name`, `deviceinfo`.`computername` AS `computername`, `deviceinfo`.`comments` AS `comments`, `deviceinfo`.`joinDomain` AS `joinDomain`, `deviceinfo`.`model` AS `model`, `deviceinfo`.`servicetag_sn` AS `servicetag_sn`, `deviceinfo`.`provider` AS `provider`, `devicetype`.`devicetype` AS `deviceType`, `brands`.`brand` AS `brand`, `deviceinfo`.`cpus` AS `cpus`, `deviceinfo`.`ram` AS `ram`, `deviceinfo`.`hardisk` AS `hardisk`, `deviceinfo`.`price` AS `price`, `deviceinfo`.`expireDate` AS `expireDate`, `deviceinfo`.`remark` AS `remark`, `deviceinfo`.`statuss` AS `statuss`, `deviceinfo`.`buy_date` AS `buy_date` FROM ((`deviceinfo` left join `devicetype` on(`deviceinfo`.`typeId` = `devicetype`.`typeId`)) left join `brands` on(`deviceinfo`.`brandId` = `brands`.`brandId`)) ;

-- --------------------------------------------------------

--
-- Structure for view `v_employee`
--
DROP TABLE IF EXISTS `v_employee`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_employee`  AS SELECT `employee`.`employeeId` AS `employeeId`, `employee`.`gender` AS `gender`, `employee`.`name_la` AS `name_la`, `employee`.`name_en` AS `name_en`, `employee`.`nickname` AS `nickname`, `employee`.`email` AS `email`, `positions`.`position` AS `position`, `departments`.`department` AS `department`, `companys`.`company` AS `company` FROM (((`employee` left join `positions` on(`employee`.`positionId` = `positions`.`positionId`)) left join `departments` on(`employee`.`departmentId` = `departments`.`departmentId`)) left join `companys` on(`employee`.`companyId` = `companys`.`companyId`)) ;

-- --------------------------------------------------------

--
-- Structure for view `v_employee_device`
--
DROP TABLE IF EXISTS `v_employee_device`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_employee_device`  AS SELECT `employee`.`employeeId` AS `employeeId`, `employee`.`gender` AS `gender`, `employee`.`name_la` AS `name_la`, `employee`.`nickname` AS `nickname`, `employee`.`name_en` AS `name_en`, `employee`.`email` AS `email`, `departments`.`department` AS `department`, `positions`.`position` AS `position`, `companys`.`company` AS `company`, count(`checkoutdetail`.`deviceId`) AS `total` FROM (((((`employee` join `departments` on(`employee`.`departmentId` = `departments`.`departmentId`)) join `positions` on(`positions`.`positionId` = `employee`.`positionId`)) join `companys` on(`companys`.`companyId` = `employee`.`companyId`)) join `checkout` on(`checkout`.`employeeId` = `employee`.`employeeId`)) join `checkoutdetail` on(`checkout`.`checkoutId` = `checkoutdetail`.`checkoutId`)) GROUP BY `employee`.`employeeId` ;

-- --------------------------------------------------------

--
-- Structure for view `v_employee_using`
--
DROP TABLE IF EXISTS `v_employee_using`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_employee_using`  AS SELECT `employee`.`employeeId` AS `employeeId`, `employee`.`name_en` AS `name_en`, `employee`.`name_la` AS `name_la`, `employee`.`nickname` AS `nickname`, `employee`.`email` AS `email`, `checkout`.`checkoutId` AS `checkoutId`, `checkoutdetail`.`deviceId` AS `deviceId`, `deviceinfo`.`device_name` AS `device_name`, `deviceinfo`.`statuss` AS `statuss`, `deviceinfo`.`joinDomain` AS `joinDomain`, `deviceinfo`.`localId` AS `localId`, `devicetype`.`devicetype` AS `devicetype`, `brands`.`brand` AS `brand`, `deviceinfo`.`model` AS `model`, `deviceinfo`.`servicetag_sn` AS `servicetag_sn`, `deviceinfo`.`cpus` AS `cpus`, `deviceinfo`.`ram` AS `ram`, `deviceinfo`.`hardisk` AS `hardisk` FROM (((((`employee` join `checkout` on(`employee`.`employeeId` = `checkout`.`employeeId`)) join `checkoutdetail` on(`checkout`.`checkoutId` = `checkoutdetail`.`checkoutId`)) join `deviceinfo` on(`checkoutdetail`.`deviceId` = `deviceinfo`.`deviceId`)) join `brands` on(`deviceinfo`.`brandId` = `brands`.`brandId`)) join `devicetype` on(`deviceinfo`.`typeId` = `devicetype`.`typeId`)) WHERE `deviceinfo`.`statuss` = 'In Use' ;

-- --------------------------------------------------------

--
-- Structure for view `v_empoyees`
--
DROP TABLE IF EXISTS `v_empoyees`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_empoyees`  AS SELECT `employee`.`employeeId` AS `employeeId`, `employee`.`gender` AS `gender`, `employee`.`name_la` AS `name_la`, `employee`.`name_en` AS `name_en`, `employee`.`nickname` AS `nickname`, `employee`.`email` AS `email`, `positions`.`position` AS `position`, `departments`.`department` AS `department`, `companys`.`company` AS `company`, count(`checkoutdetail`.`deviceId`) AS `device` FROM (((((`employee` left join `checkout` on(`employee`.`employeeId` = `checkout`.`employeeId`)) left join `checkoutdetail` on(`checkout`.`checkoutId` = `checkoutdetail`.`checkoutId`)) join `positions` on(`employee`.`positionId` = `positions`.`positionId`)) join `departments` on(`employee`.`departmentId` = `departments`.`departmentId`)) join `companys` on(`employee`.`companyId` = `companys`.`companyId`)) GROUP BY `employee`.`employeeId` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brandId`);

--
-- Indexes for table `checkin`
--
ALTER TABLE `checkin`
  ADD PRIMARY KEY (`checkinId`),
  ADD KEY `username` (`username`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `checkindetail`
--
ALTER TABLE `checkindetail`
  ADD PRIMARY KEY (`checkinDetailId`),
  ADD KEY `checkinId` (`checkinId`),
  ADD KEY `deviceId` (`deviceId`);

--
-- Indexes for table `checkinlog`
--
ALTER TABLE `checkinlog`
  ADD PRIMARY KEY (`logId`);

--
-- Indexes for table `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`checkoutId`),
  ADD KEY `username` (`username`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `checkoutdetail`
--
ALTER TABLE `checkoutdetail`
  ADD PRIMARY KEY (`checkoutdetailId`),
  ADD KEY `deviceId` (`deviceId`),
  ADD KEY `checkoutdetail_ibfk_1` (`checkoutId`);

--
-- Indexes for table `checkoutlog`
--
ALTER TABLE `checkoutlog`
  ADD PRIMARY KEY (`logId`);

--
-- Indexes for table `companys`
--
ALTER TABLE `companys`
  ADD PRIMARY KEY (`companyId`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`departmentId`),
  ADD KEY `companyId` (`companyId`);

--
-- Indexes for table `deviceinfo`
--
ALTER TABLE `deviceinfo`
  ADD PRIMARY KEY (`deviceId`),
  ADD KEY `brandId` (`brandId`),
  ADD KEY `typeId` (`typeId`);

--
-- Indexes for table `devicetype`
--
ALTER TABLE `devicetype`
  ADD PRIMARY KEY (`typeId`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employeeId`),
  ADD KEY `departmentId` (`departmentId`),
  ADD KEY `positionId` (`positionId`),
  ADD KEY `companyId` (`companyId`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`orderdetailId`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `deviceId` (`deviceId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`positionId`),
  ADD KEY `departmentId` (`departmentId`);

--
-- Indexes for table `receivelog`
--
ALTER TABLE `receivelog`
  ADD PRIMARY KEY (`logId`);

--
-- Indexes for table `repairlog`
--
ALTER TABLE `repairlog`
  ADD PRIMARY KEY (`logId`);

--
-- Indexes for table `repairs`
--
ALTER TABLE `repairs`
  ADD PRIMARY KEY (`repairId`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `transfers`
--
ALTER TABLE `transfers`
  ADD PRIMARY KEY (`transferId`),
  ADD KEY `employeeId` (`employeeId`),
  ADD KEY `deviceId` (`deviceId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brandId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `checkindetail`
--
ALTER TABLE `checkindetail`
  MODIFY `checkinDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `checkinlog`
--
ALTER TABLE `checkinlog`
  MODIFY `logId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `checkoutdetail`
--
ALTER TABLE `checkoutdetail`
  MODIFY `checkoutdetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `checkoutlog`
--
ALTER TABLE `checkoutlog`
  MODIFY `logId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `companys`
--
ALTER TABLE `companys`
  MODIFY `companyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `departmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `devicetype`
--
ALTER TABLE `devicetype`
  MODIFY `typeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `orderdetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `positionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `receivelog`
--
ALTER TABLE `receivelog`
  MODIFY `logId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `repairlog`
--
ALTER TABLE `repairlog`
  MODIFY `logId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `transfers`
--
ALTER TABLE `transfers`
  MODIFY `transferId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `checkin`
--
ALTER TABLE `checkin`
  ADD CONSTRAINT `checkin_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  ADD CONSTRAINT `checkin_ibfk_2` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`employeeId`);

--
-- Constraints for table `checkindetail`
--
ALTER TABLE `checkindetail`
  ADD CONSTRAINT `checkindetail_ibfk_1` FOREIGN KEY (`checkinId`) REFERENCES `checkin` (`checkinId`),
  ADD CONSTRAINT `checkindetail_ibfk_2` FOREIGN KEY (`deviceId`) REFERENCES `deviceinfo` (`deviceId`);

--
-- Constraints for table `checkout`
--
ALTER TABLE `checkout`
  ADD CONSTRAINT `checkout_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  ADD CONSTRAINT `checkout_ibfk_2` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`employeeId`);

--
-- Constraints for table `checkoutdetail`
--
ALTER TABLE `checkoutdetail`
  ADD CONSTRAINT `checkoutdetail_ibfk_1` FOREIGN KEY (`checkoutId`) REFERENCES `checkout` (`checkoutId`),
  ADD CONSTRAINT `checkoutdetail_ibfk_2` FOREIGN KEY (`deviceId`) REFERENCES `deviceinfo` (`deviceId`);

--
-- Constraints for table `departments`
--
ALTER TABLE `departments`
  ADD CONSTRAINT `companyId` FOREIGN KEY (`companyId`) REFERENCES `companys` (`companyId`);

--
-- Constraints for table `deviceinfo`
--
ALTER TABLE `deviceinfo`
  ADD CONSTRAINT `deviceinfo_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`brandId`),
  ADD CONSTRAINT `deviceinfo_ibfk_2` FOREIGN KEY (`typeId`) REFERENCES `devicetype` (`typeId`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`departmentId`),
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`positionId`) REFERENCES `positions` (`positionId`),
  ADD CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`companyId`) REFERENCES `companys` (`companyId`);

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`),
  ADD CONSTRAINT `orderdetail_ibfk_2` FOREIGN KEY (`deviceId`) REFERENCES `deviceinfo` (`deviceId`);

--
-- Constraints for table `positions`
--
ALTER TABLE `positions`
  ADD CONSTRAINT `positions_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`departmentId`);

--
-- Constraints for table `repairs`
--
ALTER TABLE `repairs`
  ADD CONSTRAINT `repairs_ibfk_2` FOREIGN KEY (`username`) REFERENCES `users` (`username`);

--
-- Constraints for table `transfers`
--
ALTER TABLE `transfers`
  ADD CONSTRAINT `transfers_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`employeeId`),
  ADD CONSTRAINT `transfers_ibfk_2` FOREIGN KEY (`deviceId`) REFERENCES `deviceinfo` (`deviceId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
