INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Zion", "Flores", 1, null), ("Kenny", "Smith", 2, 1), ("Tommy", "Hill", 3, null), ("Abby", "Miller", 4, 2), ("Kent", "Kirk", 2, 1), ("Arthur", "Boom", 6, 3)

INSERT INTO managers(manager)
VALUES("Zion", "Flores"), ("Tommy", "Hill"), ("Abby", "Miller");

SELECT * FROM employee;
SELECT * FROM managers;