## patika-dev-assignments

Binary Search Tree Projesi

PROJE 3

###[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Root'u 7 olarak alırsak, ikinci rakam olan 5, 7'den küçük olduğu için soluna eklenir, 1, 7'yi ve 5'i geçip sola eklenir. 8, 7'den büyük olduğu için sağına eklenir. 3, 7 ve 5'ten küçük olduğu için sola geçer ve 1'den büyük olduğu için sağına eklenir. 6, 5'ten büyük olduğu için sağına eklenir. 0, 1'den küçük olduğu için soluna eklenir. 9, 8'in sağına eklenir. 4, sorgulamada 7 ve 5'ten küçük olduğu için soldan gider ama 1'den ve 3'ten büyük olduğu için sağa eklenir. 2 de 1'den büyük olduğu için önce sağa, 3'ten küçük olduğu için sola eklenir. 

            7 
          /    \
         5       8
        /  \      \
       1     6      9
      /  \      
     0     3 
          / \ 
         2   4
               