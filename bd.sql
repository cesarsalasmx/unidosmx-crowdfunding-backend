CREATE DATABASE unidosmxCf;

CREATE TABLE IF NOT EXISTS public.users
(
    id serial NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    username character varying(255),
    email character varying(255),
    password character varying(255),
    date_registration date,
    birthday date,
    id_gender integer,
    status boolean,
    id_role integer,
    country character varying(255),
    PRIMARY KEY (id)
);

ALTER TABLE public.users
    OWNER to cesarsalas;

CREATE TABLE IF NOT EXISTS public.comments
(
    id serial NOT NULL,
    id_post integer,
    id_author integer,
    author_name character varying(255),
    author_email character varying(255),
    author_ip character varying(100),
    date date,
    content text,
    id_status integer,
    PRIMARY KEY (id)
);

ALTER TABLE public.comments
    OWNER to cesarsalas;

CREATE TABLE IF NOT EXISTS public.options
(
    id serial NOT NULL,
    name character varying(255),
    value character varying(255),
    PRIMARY KEY (id)
);

ALTER TABLE public.options
    OWNER to cesarsalas;

CREATE TABLE IF NOT EXISTS public.donations
(
    id serial NOT NULL,
    user_id integer,
    post_id integer,
    date date,
    status character varying(255),
    amount character varying(100),
    id_payment character varying(255),
    PRIMARY KEY (id)
);

ALTER TABLE public.donations
    OWNER to cesarsalas;

CREATE TABLE IF NOT EXISTS public.posts
(
    id serial NOT NULL,
    author integer,
    date date,
    content text,
    title character varying(255),
    slug character varying(255),
    id_status integer,
    id_type integer,
    image character varying(255),
    category character varying(255),
    PRIMARY KEY (id)
);

ALTER TABLE public.posts
    OWNER to cesarsalas;

CREATE TABLE IF NOT EXISTS public.sessions
(
    id serial NOT NULL,
    id_post integer,
    ip character varying(100),
    browser character varying(255),
    date date,
    device character varying(255),
    referrer character varying(255),
    PRIMARY KEY (id)
);

ALTER TABLE public.sessions
    OWNER to cesarsalas;

/* ***** Constrains table posts  ***** */
ALTER TABLE public.posts
    ADD CONSTRAINT posts_author_fk FOREIGN KEY (author)
    REFERENCES public.users (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

ALTER TABLE public.posts
    ADD CONSTRAINT posts_status_fk FOREIGN KEY (id_status)
    REFERENCES public.options (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

ALTER TABLE public.posts
    ADD CONSTRAINT posts_type_fk FOREIGN KEY (id_type)
    REFERENCES public.options (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

/* ***** Constrains table users  ***** */
ALTER TABLE public.users
    ADD CONSTRAINT users_genders_fk FOREIGN KEY (id_gender)
    REFERENCES public.options (id)
    ON UPDATE CASCADE
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE public.users
    ADD CONSTRAINT users_roles_fk FOREIGN KEY (id_role)
    REFERENCES public.options (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

/* ***** Constrains table session  ***** */
ALTER TABLE public.sessions
    ADD CONSTRAINT sessions_post_fk FOREIGN KEY (id_post)
    REFERENCES public.posts (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

/* ***** Constrains table donations  ***** */
ALTER TABLE public.donations
    ADD CONSTRAINT donations_user_fk FOREIGN KEY (user_id)
    REFERENCES public.users (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

ALTER TABLE public.donations
    ADD CONSTRAINT donations_post_fk FOREIGN KEY (post_id)
    REFERENCES public.posts (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

/* ***** Constrains table comments  ***** */
ALTER TABLE public.comments
    ADD CONSTRAINT comments_post_fk FOREIGN KEY (id_post)
    REFERENCES public.posts (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

ALTER TABLE public.comments
    ADD CONSTRAINT comments_status_fk FOREIGN KEY (id_status)
    REFERENCES public.options (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;

/*  Insert Basic Elements   */

INSERT INTO public.options(
	name, value)
	VALUES ('gender','Hombre'),
		   ('gender','Mujer'),
		   ('roles','Administrador'),
		   ('roles','Donador'),
		   ('type_of_post','Cause'),
		   ('type_of_post','Post')
           ('status_of_post', 'Publicado'),
           ('status_of_post', 'Borrador'),
           ('status_of_post', 'Eliminado');

INSERT INTO public.users(
	first_name, last_name, username, email, password, date_registration, birthday, id_gender, status, id_role, country)
	VALUES ('César', 'Salas', 'cesarsalasmx', 'contacto@cesarsalas.mx', 'csmx', '01-04-2022', '02-12-1997', 1, true, 3, 'México');

INSERT INTO public.posts(
	author, date, content, title, slug, id_status, id_type, image, category)
	VALUES (1, '01-04-1997', '<p>Reforestamos en comunidad junto a niñas, niños y jóvenes árboles nativos en la Riviera maya para garantizar un futuro sostenible.</p>', 'Reforesta Cancún', 'reforesta-cancun', 5, 5, '', 'Reforestación'),
	(1, '01-04-1997', '<p> Festival de arte público que busca llenar de color Cancún. Realizamos murales con mensajes positivos. </p>', 'Sonríe', 'sonrie', 5, 5, '', 'Arte'),
	(1, '01-04-1997', '<p> Intervenimos positivamente escuelas públicas primarias en situación vulnerable a través de la restauración de espacios </p>', 'Soy Futuro', 'soy-futuro', 5, 5, '', 'Recuperación');

/* View Users Donations*/
CREATE VIEW view_users_donations AS SELECT 
	users.id,
	users.first_name,
	users.last_name,
	users.username,
	users.email,
	users.password,
	users.date_registration,
	users.birthday,
	options.value,
	users.status,
	users.country,
FROM users INNER JOIN options
ON users.id_gender=options.id