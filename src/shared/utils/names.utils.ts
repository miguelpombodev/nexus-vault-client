export function getUserNameInitials(name: string) {
  if (!name) {
    return;
  }

  const splittedName = name.split(" ");
  const firstNameInitial = splittedName[0][0];
  const lastNameInitial = splittedName[1][0];

  return firstNameInitial.concat(lastNameInitial);
}
