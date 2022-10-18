create database events;
\c events;

DROP TABLE events;
create table events(
    id serial primary key,
    title varchar,
    firstname varchar,
    lastname varchar,
    position varchar,
    time varchar(5),
    format varchar,
    date varchar(10),
    status int DEFAULT 1,
    number varchar(12),
    description varchar,
    sub_category_id int,
    count int DEFAULT 0
);

DROP TABLE view_count;
create table view_count(
    id serial primary key,
    event_id int references events(id),
    ip varchar(30)
);

DROP TABLE category;
create table category(
    id serial,
    status int DEFAULT 1,
    name varchar
);
insert into category (name) values('IT'), ('Design'), ('raboto texnika');

DROP TABLE sub_category;
create table sub_category(
    id serial,
    name varchar,
    status int DEFAULT 1,
    category_id int
);
insert into sub_category (name, category_id) values('Front end', 1), ('back end', 1), ('mobile', 1), ('grafika', 2);


DROP TABLE users;
create table users(
    id serial,
    username varchar(30),
    status int DEFAULT 1,
    password varchar
);
insert into users (username, password) values('ahror', 'admin123');
