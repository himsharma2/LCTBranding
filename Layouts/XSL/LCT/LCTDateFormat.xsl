<xsl:stylesheet xmlns:x="http://www.w3.org/2001/XMLSchema" 
xmlns:d="http://schemas.microsoft.com/sharepoint/dsp" version="1.0" 
exclude-result-prefixes="xsl msxsl ddwrt" xmlns:ddwrt="http://schemas.microsoft.com/WebParts/v2/DataView/runtime" 
xmlns:asp="http://schemas.microsoft.com/ASPNET/20" xmlns:__designer="http://schemas.microsoft.com/WebParts/v2/DataView/designer" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" 
xmlns:SharePoint="Microsoft.SharePoint.WebControls" xmlns:ddwrt2="urn:frontpage:internal" 
xmlns:o="urn:schemas-microsoft-com:office:office"> 
        <xsl:include href="/_layouts/xsl/main.xsl"/> 
        <xsl:include href="/_layouts/xsl/internal.xsl"/>
    
	<xsl:template name="FieldRef_ValueOf.DateTimeInitiated"
                match ="FieldRef[@Name='DateTimeInitiated']" 
                mode="DateTime_body">
		<xsl:param name="thisNode" select="."/>		               
		<xsl:element name="newdateDateTimeInitiated">
			<xsl:if test="string($thisNode/@DateTimeInitiated)!=''">
			<xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string($thisNode/@DateTimeInitiated)"/>
			</xsl:call-template>
			</xsl:if>
		</xsl:element>	
	</xsl:template>

  <xsl:template name="FieldRef_ValueOf.Created"
                match ="FieldRef[@Name='Created']"
                mode="DateTime_body">
    <xsl:param name="thisNode" select="."/>
    <xsl:element name="newdateCreated">
      <xsl:if test="string($thisNode/@Created)!=''">
        <xsl:call-template name="FormatDate">
          <xsl:with-param name="DateTime" select="string($thisNode/@Created)"/>
        </xsl:call-template>
      </xsl:if>
    </xsl:element>
  </xsl:template>
  
	<xsl:template name="FieldRef_ValueOf.HASubmissionDate"
                match ="FieldRef[@Name='HASubmissionDate']" 
                mode="DateTime_body">
		<xsl:param name="thisNode" select="."/>		               
		<xsl:element name="newdateHASubmissionDate">
			<xsl:if test="string($thisNode/@HASubmissionDate)!=''">
			<xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string($thisNode/@HASubmissionDate)"/>
			</xsl:call-template>
			</xsl:if>
		</xsl:element>		
	</xsl:template>
	
	<xsl:template name="FieldRef_ValueOf.HAApprovalDate"
                match ="FieldRef[@Name='HAApprovalDate']" 
                mode="DateTime_body">
		<xsl:param name="thisNode" select="."/>		               
		<xsl:element name="newdateHAApprovalDate">
			<xsl:if test="string($thisNode/@HAApprovalDate)!=''">
			<xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string($thisNode/@HAApprovalDate)"/>
			</xsl:call-template>
			</xsl:if>
		</xsl:element>		
	</xsl:template>
	
	<xsl:template name="FieldRef_ValueOf.NewArtworkDistributionDueDate"
                match ="FieldRef[@Name='NewArtworkDistributionDueDate']" 
                mode="DateTime_body">
		<xsl:param name="thisNode" select="."/>		               
		<xsl:element name="newdateNodeNewArtworkDistributionDueDate">
			<xsl:if test="string($thisNode/@NewArtworkDistributionDueDate)!=''">
			<xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string($thisNode/@NewArtworkDistributionDueDate)"/>
			</xsl:call-template>
			</xsl:if>
		</xsl:element>		
	</xsl:template>
	
	<xsl:template name="FieldRef_ValueOf.NewArtworkDistributionDate"
                match ="FieldRef[@Name='NewArtworkDistributionDate']" 
                mode="DateTime_body">
		<xsl:param name="thisNode" select="."/>		               
		<xsl:element name="newdateNewArtworkDistributionDate">
			<xsl:if test="string($thisNode/@NewArtworkDistributionDate)!=''">
			<xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string($thisNode/@NewArtworkDistributionDate)"/>
			</xsl:call-template>
			</xsl:if>
		</xsl:element>		
	</xsl:template>
	
	<xsl:template name="FieldRef_ValueOf.SubmissionDueDate"
                match ="FieldRef[@Name='SubmissionDueDate']" 
                mode="DateTime_body">
		<xsl:param name="thisNode" select="."/>		               
		<xsl:element name="newdateNodeSubmissionDueDate">
			<xsl:if test="string($thisNode/@SubmissionDueDate)!=''">
			<xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string($thisNode/@SubmissionDueDate)"/>
			</xsl:call-template>
			</xsl:if>
		</xsl:element>		
	</xsl:template>
	 
<xsl:template name="FormatDate"> 
<!-- expected date format 1/20/2007 10:22 PM [OR] 01/20/2007 10:22 PM --> 
<xsl:param name="DateTime" /> 
<!-- new date format 20-Jan-2007 10:22 PM--> 
<xsl:variable name="day"> 
<xsl:value-of select="substring-before($DateTime,'/')" /> 
</xsl:variable> 
<xsl:variable name="mo-temp"> 
<xsl:value-of select="substring-after($DateTime,'/')" /> 
</xsl:variable> 
<xsl:variable name="mo"> 
<xsl:value-of select="substring-before($mo-temp,'/')" /> 
</xsl:variable> 
<xsl:variable name="year-temp"> 
<xsl:value-of select="substring-after($mo-temp,'/')" /> 
</xsl:variable> 
<xsl:variable name="year"> 
<xsl:value-of select="substring($year-temp,1,4)" /> 
</xsl:variable> 
<xsl:variable name="time"> 
<xsl:value-of select="substring-after($DateTime,' ')" /> 
</xsl:variable>
<xsl:value-of select="$day"/> 
<xsl:value-of select="'-'"/>
<xsl:choose> 
<xsl:when test="$mo = '1' or $mo = '01'">Jan</xsl:when> 
<xsl:when test="$mo = '2' or $mo = '02'">Feb</xsl:when> 
<xsl:when test="$mo = '3' or $mo = '03'">Mar</xsl:when> 
<xsl:when test="$mo = '4' or $mo = '04'">Apr</xsl:when> 
<xsl:when test="$mo = '5' or $mo = '05'">May</xsl:when> 
<xsl:when test="$mo = '6' or $mo = '06'">Jun</xsl:when> 
<xsl:when test="$mo = '7' or $mo = '07'">Jul</xsl:when> 
<xsl:when test="$mo = '8' or $mo = '08'">Aug</xsl:when> 
<xsl:when test="$mo = '9' or $mo = '09'">Sep</xsl:when> 
<xsl:when test="$mo = '10'">Oct</xsl:when> 
<xsl:when test="$mo = '11'">Nov</xsl:when> 
<xsl:when test="$mo = '12'">Dec</xsl:when> 
</xsl:choose> 

<xsl:value-of select="'-'"/>
<xsl:value-of select="$year"/> 

<xsl:value-of select="' '"/>
<xsl:value-of select="$time"/> 
</xsl:template>
</xsl:stylesheet>