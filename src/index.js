export default function toCaseSpecialAttack(obj) {
  const { special: [id, name, icon, description = 'Описание недоступно'] } = obj;
  const arr = [id, name, icon, description];

  return arr;
}
