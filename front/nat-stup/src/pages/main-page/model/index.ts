export default function personMock( numberPerson: number ){
  if (numberPerson === 1) {
    return {
      direction: 'Гладить кота',
      applicantType: 'Индивидуальный предприниматель',
      regionOfProvision: 'ЮФО',
      specificTags: 'шерсть',
    }
  } else if (numberPerson === 2) {
    return {
      direction: 'Чесать гуся',
      applicantType: 'Физическое лицо',
      regionOfProvision: 'Москва',
      specificTags: 'перо',
    }
  } else {
    return {
      direction: 'Смотреть на стадо коров',
      applicantType: 'Юридическое лицо',
      regionOfProvision: 'Ростовская область',
      specificTags: 'молоко',
    }
  }
}
