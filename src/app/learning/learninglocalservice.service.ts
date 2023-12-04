import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearninglocalserviceService {

  constructor() { }
  getDigitalQuestions(){
    // http://localhost:8080/preptalk/topics/Allcontents
    const data=[{"contentId":1,"courseId":0,"topicId":0,"questions":"tdhytrtry","answers":"tytytryterytytyy"},{"contentId":2,"courseId":1,"topicId":1,"questions":"tdhytrtry","answers":"tytytryterytytyy"},{"contentId":3,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":4,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":5,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":6,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":7,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":8,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":9,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":10,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":11,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":12,"courseId":0,"topicId":0,"questions":null,"answers":null},{"contentId":13,"courseId":1,"topicId":1,"questions":"r4te56y","answers":"teryertyery"},{"contentId":15,"courseId":1,"topicId":1,"questions":null,"answers":"wertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rt tttttttttttttttttttttttttttttttttttttttttttttasffffsssssssssss"},{"contentId":16,"courseId":1,"topicId":1,"questions":"wwrwrwr","answers":"wertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rt tttttttttttttttttttttttttttttttttttttttttttttasffffsssssssssss"},{"contentId":17,"courseId":2,"topicId":10,"questions":"WHAT IS JAVA BRO ?","answers":"Indentation refers to the spaces at the beginning of a code line.\n\nWhere in other programming languages the indentation in code is for readability only, the indentation in Python is very important.\n\nPython uses indentation to indicate a block of code."},{"contentId":18,"courseId":2,"topicId":10,"questions":"WHAT IS JAVA BRO ?","answers":"Indentation refers to the spaces at the beginning of a code line.\n\nWhere in other programming languages the indentation in code is for readability only, the indentation in Python is very important.\n\nPython uses indentation to indicate a block of code."},{"contentId":19,"courseId":2,"topicId":10,"questions":"WHAT IS JAVA BRO ?","answers":"Indentation refers to the spaces at the beginning of a code line.\n\nWhere in other programming languages the indentation in code is for readability only, the indentation in Python is very important.\n\nPython uses indentation to indicate a block of code."},{"contentId":20,"courseId":1,"topicId":1,"questions":null,"answers":"wertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rt tttttttttttttttttttttttttttttttttttttttttttttasffffsssssssssss"},{"contentId":21,"courseId":1,"topicId":1,"questions":"sfsfsf","answers":"wertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rtwertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rt"},{"contentId":22,"courseId":1,"topicId":1,"questions":"sfsfsfdfedff","answers":"wertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rtwertwet rtgrwet rt tr t rt rt r t rt rt rt r t retrrrrtttttttttttttttttttttttttttttt rt"},{"contentId":23,"courseId":0,"topicId":0,"questions":"8i9io","answers":"iuiioiioioio"},{"contentId":26,"courseId":2,"topicId":10,"questions":"rtertretert","answers":"rtrtrtrtrtrt"},{"contentId":25,"courseId":1,"topicId":1,"questions":"Balaji6666","answers":"99007777"},{"contentId":27,"courseId":1,"topicId":2,"questions":"2222","answers":"222222"},{"contentId":28,"courseId":1,"topicId":2,"questions":"2222","answers":"222222"},{"contentId":24,"courseId":1,"topicId":1,"questions":"8i9iojgjgf","answers":"iuiioiioioio"},{"contentId":14,"courseId":1,"topicId":1,"questions":"gwert","answers":"What is content security policy \n\ntr\nt\nrt\n\nrt\nr\nt\nrt\n\nrt\nrt\nr\nt\nretrrrrtttttttttttttttttttttttttttttt\nrt\nttttttttttttttttttttttttttttttttttttttttttttt"},{"contentId":30,"courseId":1,"topicId":1,"questions":"ertertert","answers":"rtertertertertert"},{"contentId":29,"courseId":3,"topicId":21,"questions":"9","answers":"ujyfyujfyutg8t uityv u7t utv 9u kjug utv 87 guiv ug   fuy yg "},{"contentId":31,"courseId":2,"topicId":10,"questions":"WHAT IS JAVA BRO ?","answers":"Indentation Refers To The Spaces At The Beginning Of A Code Line. Where In Other Programming Languages The Indentation In Code Is For Readability Only, The Indentation In Python Is Very Important. Python Uses Indentation To Indicate A Block Of Code. "},{"contentId":32,"courseId":2,"topicId":10,"questions":"WHAT IS JAVA BRO ?","answers":"Indentation Refers To The Spaces At The Beginning Of A Code Line. Where In Other Programming Languages The Indentation In Code Is For Readability Only, The Indentation In Python Is Very Important. Python Uses Indentation To Indicate A Block Of Code. "},{"contentId":33,"courseId":2,"topicId":10,"questions":"tytry7rt6y","answers":"yn eyr tytrytrytry"},{"contentId":34,"courseId":2,"topicId":10,"questions":"tytry7rt6y","answers":"yn eyr tytrytrytry"}]
    return data
  }
  getAllCourses(){
    // http://localhost:8080/preptalk/learning/learningcourses
    const data=
    [{}]
    return data
  }
  

  AllTopicNames(){
    // http://localhost:8080/preptalk/topics/AllTopics
    const data=
    [{}]
    return data
  }
  
}
