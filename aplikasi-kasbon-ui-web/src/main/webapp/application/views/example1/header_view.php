/*
 * Copyright (C) 2011 ArtiVisi Intermedia <info@artivisi.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
<!doctype html>
<html lang="en">
<head>
<title>Oborci Example1</title>
<script
	type="text/javascript"
	src="<?php echo base_url(); ?>assets/oborci/js/jquery-1.6.min.js"></script>
<script
	type="text/javascript"
	src="<?php echo base_url(); ?>assets/oborci/js/jquery.tablesorter.min.js"></script>
<script
	type="text/javascript"
	src="<?php echo base_url(); ?>assets/oborci/js/jquery.metadata.js"></script>
<script
	type="text/javascript"
	src="<?php echo base_url(); ?>assets/oborci/js/jquery.tablesorter.pager.js"></script>
<link rel="stylesheet"
	href="<?php echo base_url(); ?>assets/example1/css/home.css" type="text/css" />
<link rel="stylesheet"
	href="<?php echo base_url(); ?>assets/oborci/css/crud.css" type="text/css" />
<link rel="stylesheet"
	href="<?php echo base_url(); ?>assets/oborci/css/form.css" type="text/css" />
</head>
<body>

<h1><?php echo t('Example1 Panel'); ?></h1>

<p>
<?php if ($this->auth->get_access()) : ?>
<?php echo t('Welcome'); ?> <?= $login['first_name'] ?> <?= $login['last_name'] ?><br />
<?php echo t('Your role'); ?>: <?= $login['role'] ?>
<?php endif; ?>
</p>

<div id='menu_box'>
        <?= $menu['box'] ?>
<?php if ($this->auth->get_access()) : ?>
        <?php echo anchor('example1/process/logout', t('Logout'), 'title=' . t('Logout')); ?>
<?php endif; ?>
</div>

<?php flush(); ?>
