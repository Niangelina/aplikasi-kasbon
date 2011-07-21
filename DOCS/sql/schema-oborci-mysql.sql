--
-- Copyright (C) 2011 ArtiVisi Intermedia <info@artivisi.com>
--
-- Licensed under the Apache License, Version 2.0 (the "License");
-- you may not use this file except in compliance with the License.
-- You may obtain a copy of the License at
--
--         http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software
-- distributed under the License is distributed on an "AS IS" BASIS,
-- WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
-- See the License for the specific language governing permissions and
-- limitations under the License.
--
-- MySQL dump 10.13  Distrib 5.1.41, for debian-linux-gnu (i486)
--
-- Host: localhost    Database: oborci
-- ------------------------------------------------------
-- Server version	5.1.41-3ubuntu12.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(16) NOT NULL DEFAULT '0',
  `user_agent` varchar(50) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ci_sessions`
--

LOCK TABLES `ci_sessions` WRITE;
/*!40000 ALTER TABLE `ci_sessions` DISABLE KEYS */;
INSERT INTO `ci_sessions` VALUES ('932c8147614f9d6d55661ce6cedb22b3','0.0.0.0','Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (',1307523554,''),('1b9599c1a02eb038f24d4e120429deb1','0.0.0.0','Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (',1307522782,''),('ae5992af46d9423e995d67b9d359da7a','127.0.0.1','Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (',1307517556,''),('0a01aa18f1f06c449c71d99655f9b80e','127.0.0.1','Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.1',1307519388,''),('8b78d33615443dcbaf7c8d0e86c03c47','0.0.0.0','Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (',1307522039,'a:2:{s:7:\"user_id\";s:1:\"1\";s:11:\"login_state\";b:1;}'),('e5b8045799aada63dfa6b5144ee3f418','127.0.0.1','Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.1',1307524577,''),('e817bb667eb5d5e37cbf9355f7f0fbe1','127.0.0.1','Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (',1307527062,'');
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oci_menus`
--

DROP TABLE IF EXISTS `oci_menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oci_menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module_id` int(11) NOT NULL,
  `parent` tinyint(4) NOT NULL DEFAULT '0',
  `index` tinyint(4) DEFAULT NULL,
  `uri` varchar(200) NOT NULL,
  `text` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `id_css` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oci_menus`
--

LOCK TABLES `oci_menus` WRITE;
/*!40000 ALTER TABLE `oci_menus` DISABLE KEYS */;
INSERT INTO `oci_menus` VALUES (1,1,0,0,'welcome','Home','Home','menu_home'),(2,1,0,1,'roles','Roles','Role Manager','menu_roles'),(3,1,0,2,'users','Users','User Manager','menu_user'),(10,1,0,4,'menus','Menus','Menu Management','menu_menus'),(11,1,0,5,'screens','Screens','Screen Management','menu_screens'),(14,0,0,6,'pb','pb','Pb',NULL);
/*!40000 ALTER TABLE `oci_menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oci_modules`
--

DROP TABLE IF EXISTS `oci_modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oci_modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oci_modules`
--

LOCK TABLES `oci_modules` WRITE;
/*!40000 ALTER TABLE `oci_modules` DISABLE KEYS */;
INSERT INTO `oci_modules` VALUES (1,'core','Core',1);
/*!40000 ALTER TABLE `oci_modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oci_preferences`
--

DROP TABLE IF EXISTS `oci_preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oci_preferences` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oci_preferences`
--

LOCK TABLES `oci_preferences` WRITE;
/*!40000 ALTER TABLE `oci_preferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `oci_preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oci_roles`
--

DROP TABLE IF EXISTS `oci_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oci_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oci_roles`
--

LOCK TABLES `oci_roles` WRITE;
/*!40000 ALTER TABLE `oci_roles` DISABLE KEYS */;
INSERT INTO `oci_roles` VALUES (1,'Administrators'),(2,'Managers'),(10,'Alpha Testers'),(9,'Beta Testers'),(13,'Gamma Testers'),(14,'Theta Testers');
/*!40000 ALTER TABLE `oci_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oci_roles_menus`
--

DROP TABLE IF EXISTS `oci_roles_menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oci_roles_menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oci_roles_menus`
--

LOCK TABLES `oci_roles_menus` WRITE;
/*!40000 ALTER TABLE `oci_roles_menus` DISABLE KEYS */;
INSERT INTO `oci_roles_menus` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,2,2),(6,1,10),(7,1,11),(8,1,12);
/*!40000 ALTER TABLE `oci_roles_menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oci_roles_screens`
--

DROP TABLE IF EXISTS `oci_roles_screens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oci_roles_screens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `screen_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oci_roles_screens`
--

LOCK TABLES `oci_roles_screens` WRITE;
/*!40000 ALTER TABLE `oci_roles_screens` DISABLE KEYS */;
INSERT INTO `oci_roles_screens` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,2,2),(6,1,4),(7,1,5),(8,1,6),(9,1,7),(10,1,8),(11,1,9),(12,1,10);
/*!40000 ALTER TABLE `oci_roles_screens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oci_screens`
--

DROP TABLE IF EXISTS `oci_screens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oci_screens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `uri` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oci_screens`
--

LOCK TABLES `oci_screens` WRITE;
/*!40000 ALTER TABLE `oci_screens` DISABLE KEYS */;
INSERT INTO `oci_screens` VALUES (1,1,'Home','welcome'),(2,1,'Role Management','roles'),(3,1,'User Managemenet','users'),(4,1,'Role Member List','roles/members'),(5,1,'User preferences','preference/show'),(6,1,'Menu Management','menus'),(7,1,'Screen Management','screens'),(8,1,'Module Management','modules'),(9,1,'ACL screens management','acl/screens'),(10,1,'ACL menus management','acl/menus');
/*!40000 ALTER TABLE `oci_screens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oci_users`
--

DROP TABLE IF EXISTS `oci_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oci_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `preference_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `salt` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oci_users`
--

LOCK TABLES `oci_users` WRITE;
/*!40000 ALTER TABLE `oci_users` DISABLE KEYS */;
INSERT INTO `oci_users` VALUES (1,1,1,'admin','password',''),(2,2,2,'manager','password',''),(14,9,21,'teteh','pwd',''),(16,9,23,'ajew','ajew123',''),(17,9,24,'odli','odli123',''),(18,9,25,'dede','dede123',''),(19,9,22,'aki','asdf1234',''),(20,9,26,'huha','11111',''),(21,9,27,'huhu','11111',''),(22,9,0,'hihi','123',''),(23,9,0,'hehe','asd',''),(24,9,0,'hoho','asd',''),(25,10,28,'tester1','test',''),(26,2,29,'Momotaro','ooo',''),(27,1,0,'rumbada','asdf1234','');
/*!40000 ALTER TABLE `oci_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-06-08 17:01:48
