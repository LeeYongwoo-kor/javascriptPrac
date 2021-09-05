{
  const person1 = {
    name: "AOI",
    job: {
      title: "Teacher",
      manager: {
        name: "Lee",
      },
    },
  };

  const person2 = {
    name: "Lee",
  };

  {
    const printManager = (person) => {
      console.log(person.job.manager.name);
    };
    printManager(person1);
    printManager(person2);
  }

  // optional chaining
  {
    const printManager = (person) => {
      console.log(person.job?.manager?.name);
    };
    printManager(person1);
    printManager(person2);
  }

  {
    const name = "";
    const userName = name || "Guest";
    console.log(userName);
    // Guest가 출력

    const newUserName = name ?? "Guest";
    console.log(newUserName);
    // 텅 빈 문자가 출력
  }
}
