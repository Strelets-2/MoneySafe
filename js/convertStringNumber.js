// Создадим функцию которая конвертирует строку в число
export const convertStringNumber = (str) => {
  // Уберем из принимаемой сторки все пробелы (так как число в инпут может быть набрано как 5 000 000 и какой-нибудь браузер позволит это сделать)
  const noSpaceStr = str.replace(/\s+/g, '');
  // Превращаем полученную строку из цифр в число
  const num = parseFloat(noSpaceStr);

  // Проверяем чтобы num было именно числом и небыло бесконечным числом
  if (!isNaN(num) && isFinite(num)) {
    return num;
  } else {
    return false;
  }
};
