// Given Dataset
var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
    ];
    
    //The total number of months included in the dataset vars
    var monthCnt = 0;
    var arrayLgth = finances.length - 1;
    var netTot = 0;
    var currencySym = "$";
    
    //Avg prof and loss vars
    var avgProfLoss = [];
    var avgProfLossInd = 0;
    var prevMonthVal = 0;
    var monthDiff = 0;
    var monthDiffTot = 0;
    var monthDiffAvg = 0;
    
    //Greatest Increase vars
    var greatestIncrease = 0;
    var giarrayIndexRef = 0;
    var giMonth = "";
    
    //Greatest Decrease vars
    var greatestDecrease = 0;
    var gdarrayIndexRef = 0;
    var gdMonth = "";
    
    //Financial Report Header vars
    var headerTitle = "Financial Analysis\n";
    var headerSep = "--------------------------\n";
    var header = headerTitle + headerSep;
    
    
    //Print Analysis Header
    
    console.log (header);
    
    for (let i = 0; i < finances.length; i++) {
    
        monthCnt++;
    
        //Collect total amount
        netTot += finances[i][1];
        //console.log ("Array Row Value is: " + finances[i][1])
    
        if (i == 0) {
            prevMonthVal = finances[i][1];
    
            greatestIncrease = finances[i][1];
            giarrayIndexRef = i;
            giMonth = finances[i][0];
    
            greatestDecrease = finances[i][1];
            gdarrayIndexRef = i;
            gdMonth = finances[i][0];
        }
    
    
        // Avg Monthly Profits & Losses:- After inital iter of finacial array start comparing the month 2 month diff
        if (i > 0 ) {
    
            // Avg Prof or Loss:- setup index for new array for monthly avg prof or loss values
            avgProfLossInd = i - 1;
    
            //Debug: console.log ("avgProfLossInd: " + avgProfLossInd)
    
            // Avg Prof or Loss:- cal month 2 month diff (prev & current)
            monthDiff = prevMonthVal - finances[i][1];
    
            // Avg Prof or Loss:- add month diff to new array
            avgProfLoss[avgProfLossInd] = monthDiff; 
    
            //Debug: console.log ("avgProfLoss: " + avgProfLoss[avgProfLossInd])
    
            // Avg Prof or Loss:- add up the month2month diff to find monthdifftotal
            monthDiffTot += monthDiff
    
            // Avg Prof or Loss:- put current month into prevmonth variable to next iter check
            prevMonthVal = finances[i][1];
    
            // Greatest Increase and Decrease logic
            if (finances[i][1] > greatestIncrease) {
    
                // Add current dataset value to greatestIncrease var when it is greater than prev value
                greatestIncrease = finances[i][1];
                giarrayIndexRef = i;
                giMonth = finances[i][0];
    
            } else if (finances[i][1] < greatestDecrease) {

                // Add current dataset value to greatestDecrease var when it is less than prev value
                greatestDecrease = finances[i][1];
                gdarrayIndexRef = i;
                gdMonth = finances[i][0];
    
            }
    
    
        }
    
    
        //Output totals required to console
        if (i == arrayLgth ) {

            // Display total months in dataset
            console.log ("Total Months: " + monthCnt + "\n");
    
            // Display net total from dataset
            console.log ("Net Total: " + currencySym + netTot + "\n");
    
            //Avg Monthly Profits & Losses:- get average of total month 2 month diff's  
            monthDiffAvg = monthDiffTot / i;
    
            // Output average monthly change and round to 100th decimal value
            console.log ("Average Change: " + currencySym + Math.round(100*monthDiffAvg)/100 + "\n");

        
            //Output greatest increase value
            console.log ("Greatest Increase in Profits: " + giMonth + " " + "(" + currencySym + greatestIncrease +")" + "\n");
    
            //Output greatest decrease value
            console.log ("Greatest Decrease in Profits: " + gdMonth + " " + "(" + currencySym + greatestDecrease +")");
        }
    
    
    }