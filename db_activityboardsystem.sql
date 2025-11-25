-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2025 at 01:24 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_activityboardsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `activityName` varchar(255) NOT NULL,
  `activityType` varchar(255) NOT NULL,
  `activitySubject` varchar(255) DEFAULT NULL,
  `activityDeadline` date NOT NULL,
  `activityPublished` date NOT NULL,
  `activityPublisher` varchar(255) NOT NULL,
  `activityStatus` varchar(255) NOT NULL,
  `activityDescription` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `activityName`, `activityType`, `activitySubject`, `activityDeadline`, `activityPublished`, `activityPublisher`, `activityStatus`, `activityDescription`) VALUES
(1, 'Buizel', 'Water', 'Pokemon', '0000-00-00', '2010-10-10', 'Waffles', 'Testing', 'This is for testing');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `requestHeader` varchar(24) NOT NULL,
  `activityName` varchar(255) NOT NULL,
  `activityType` varchar(255) NOT NULL,
  `activitySubject` varchar(255) DEFAULT NULL,
  `activityDeadline` date NOT NULL,
  `activityDescription` mediumtext NOT NULL,
  `requestPublished` date NOT NULL,
  `requestPublisher` varchar(255) NOT NULL,
  `requestDescription` mediumtext NOT NULL,
  `requestStatus` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `requestHeader`, `activityName`, `activityType`, `activitySubject`, `activityDeadline`, `activityDescription`, `requestPublished`, `requestPublisher`, `requestDescription`, `requestStatus`) VALUES
(1, '', 'Pikachu', 'Electric', 'Pokemon', '2025-11-30', 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.', '2025-11-23', 'Ako', 'Ako din', 'Dead'),
(2, 'eme_eme', 'Buizel', 'Water', 'Pokemon', '0000-00-00', 'This is for testing', '0001-01-01', 'Waffles', 'Sya din', 'Testing');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userPrivilege` varchar(255) NOT NULL DEFAULT 'Member',
  `userStatus` varchar(255) NOT NULL DEFAULT 'Offline',
  `userClass` varchar(255) NOT NULL,
  `userSection` varchar(255) NOT NULL,
  `userYearLevel` int(255) NOT NULL,
  `userIsLoggedIn` varchar(255) NOT NULL DEFAULT 'FALSE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `userPrivilege`, `userStatus`, `userClass`, `userSection`, `userYearLevel`, `userIsLoggedIn`) VALUES
(1, 'Waffles', 'Pancakes', 'SuperAdmin', 'Online', 'BSITITITganunganun', 'ABCD', 1, 'TRUE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
