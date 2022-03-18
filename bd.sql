CREATE DATABASE unidosmx-corwdfunding IF NOT EXISTS
USE unidosmx-corwdfunding

CREATE TABLE IF NOT EXISTS public.users
(
    id integer,
    first_name character varying(255),
    last_name character varying(255),
    username character varying(255),
    email character varying(255),
    date_registration date,
    birthday date,
    id_gender integer,
    status boolean,
    id_role integer,
    country character varying(255),
    PRIMARY KEY (id)
);

ALTER TABLE public.users
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.comments
(
    id integer,
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
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.options
(
    id integer,
    name character varying(255),
    value character varying(255),
    PRIMARY KEY (id)
);

ALTER TABLE public.options
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.donations
(
    id integer NOT NULL,
    user_id integer,
    post_id integer,
    date date,
    status character varying(255),
    amount character varying(100),
    id_payment character varying(255),
    PRIMARY KEY (id)
)

ALTER TABLE public.donations
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.posts
(
    id integer NOT NULL,
    author integer,
    date date,
    content text,
    title character varying(255),
    id_status integer,
    id_type integer,
    image character varying(255),
    id_category integer,
    PRIMARY KEY (id)
)

ALTER TABLE public.posts
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.sessions
(
    id integer NOT NULL,
    id_post integer,
    ip character varying(100),
    browser character varying(255),
    date date,
    device character varying(255),
    referrer character varying(255),
    PRIMARY KEY (id)
)

ALTER TABLE public.sessions
    OWNER to postgres;

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