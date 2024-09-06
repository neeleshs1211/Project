import java.util.*;
public class Main{
    static int a = 13;
    static char [] arr={0,'1','2','3','4','5','6','7','8','9'};
    public static void print(){
        int k =1;

         for(int i=1;i<=a;i++){
            for(int j=1;j<=a;j++){
                
             if(j==5||j==9||i==5||i==9){
                 System.out.print("* ");
             }
            else if((i==3 || i==7 || i== 11) && (j==3 || j==7 || j== 11)){
                 System.out.print(arr[k]+" ");
                 k++;
            }
             else{
                 System.out.print("  ");
             }
             
          }
          System.out.println();
        }
    }
    public static void update(char []arr,int x,char c){
        arr[x]=c;
       
        
    }
    public static int iswon(){
        for(int i=1;i<=9;i+=3){
            if(arr[i]==arr[i+1]&&arr[i+1]==arr[i+2]){
                return 1;
            }
        }
        for(int i=1;i<=3;i++){
             if(arr[i]==arr[i+3]&&arr[i+3]==arr[i+6]){
                return 1;
            }
            
        }
        if(arr[1]==arr[5]&&arr[5]==arr[9]){
             return 1;
        }else if(arr[2]==arr[5]&&arr[5]==arr[8]){
             return 1;
         }else {
             return 0;
         }
     }
    public static boolean isvaild(char[]arr,int x){
        if(x<1 || x>9){
            return false;
        }
        char z =0;
        z=arr[x];
    
        if(z=='X'||z=='O'){
             return false;
        }
        return true;
        
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int z=0,i=0;
       for( i=1;i<=9;i++){
             char c;
             System.out.print("\033[H\033[2J");
             System.out.flush();
             print(); 
             
             if(i%2==0){
                 System.out.println(" player 2nd turn ");
                 c='O';
             }else{
                System.out.println(" player 1st turn "); 
                c='X';
             }
             System.out.print(" Choise your number ");
             
            int x=sc.nextInt();
            if(!isvaild(arr,x)){
                i--;
                continue;
            }
            update(arr,x,c);
            z=iswon();
            if(z==1) break;
       }
       System.out.print("\033[H\033[2J");
       System.out.flush();
       print(); 
       if(z==0){
           System.out.print("  game draw ");
       }else{
          if(i%2==1){
               System.out.print(" 1 player winner ");
              
          }else{
               System.out.print(" 2 player winner ");
          }
       }
             
    }
}