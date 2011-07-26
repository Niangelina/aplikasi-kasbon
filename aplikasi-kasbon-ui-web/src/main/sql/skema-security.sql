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
drop table if exists m_group;
create table m_group(
    id int primary key auto_increment,
    name varchar(100) not null,
    constraint group_name_unique unique(name)
) Engine=InnoDB;


drop table if exists m_user;
create table m_user(
    id int primary key auto_increment,
    username varchar(100) not null,
    password varchar(255) not null,
    id_group int,
    enable bit,
    foreign key (id_group) references m_group(id),
    constraint username_unique unique(username)
)Engine=InnoDB;

drop table if exists m_permission;
create table m_permission(
    id int primary key auto_increment,
    name varchar(100) not null,
    constraint permission_name_unique unique(name)
)Engine=InnoDB;

drop table if exists m_group_permission;
create table m_group_permission(
    id_group int not null,
    id_permission int not null,
    foreign key (id_group) references m_group(id),
    foreign key (id_permission) references m_permission(id)
);

insert into m_group (name)
values ('Staff'), ('Supervisor'), ('Manager');

insert into m_user (username, password, enable, id_group)
values
('endy', '123', 1, 1),
('adi', '123', 1, 2),
('jimmy', '123', 1, 3);

insert into m_permission (name)
values ('KARYAWAN_VIEW'), ('KARYAWAN_EDIT');

insert into m_group_permission (id_group, id_permission)
values
(1,1),
(2,2),
(3,1),
(3,2);

